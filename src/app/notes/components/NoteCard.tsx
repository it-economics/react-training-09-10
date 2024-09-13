import ColorLensIcon from '@mui/icons-material/ColorLens';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Stack,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { FC, useEffect, useState } from 'react';
import tinycolor from 'tinycolor2';
import { useDeleteNote, useUpdateNote } from '../api/notes-api';
import { Note } from '../model/notes';

interface NoteCardProps {
  note: Note;
}

export const NoteCard: FC<NoteCardProps> = ({ note }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [text, setText] = useState(note.text);

  const { mutateAsync: updateNote, isPending } = useUpdateNote();
  const { mutateAsync: deleteNote, isPending: isDeleting } = useDeleteNote();

  const theme = useTheme();
  const backgroundColor = note.color ?? theme.palette.primary.light;
  const textColor = tinycolor(backgroundColor).isDark() ? 'white' : 'black';

  console.log('isPending', isPending);

  useEffect(() => {
    setTitle(note.title);
    setText(note.text);
  }, [note]);

  const save = () => {
    console.log('saving note', { title, text });
    updateNote({ ...note, title, text }).then(() => console.log('note saved'));
    setIsEditing(false);
  };

  return (
    <Card
      sx={{
        backgroundColor,
        color: textColor,
        '&:hover': {
          '& .actions': {
            opacity: '1 !important',
            pointerEvents: 'auto !important',
          },
        },
      }}
    >
      <CardContent>
        <Box height="200px">
          <Stack spacing={2}>
            {isEditing ? (
              <TextField
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                fullWidth
                label={'Title'}
              />
            ) : (
              <Typography variant={'h5'}>{title}</Typography>
            )}
            {isEditing ? (
              <TextField
                value={text}
                onChange={(event) => setText(event.target.value)}
                fullWidth
                label={'Note'}
                multiline
                rows={4}
              />
            ) : (
              <Box sx={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                <span>{text}</span>
              </Box>
            )}
          </Stack>
        </Box>
      </CardContent>
      <CardActions>
        <Stack
          direction={'row'}
          spacing={1}
          width={'100%'}
          justifyContent={'end'}
        >
          <Box
            className={'actions'}
            sx={{ opacity: '0', pointerEvents: 'none' }}
          >
            {isEditing ? (
              <IconButton color="inherit" onClick={() => save()}>
                <SaveIcon />
              </IconButton>
            ) : (
              <IconButton color="inherit" onClick={() => setIsEditing(true)}>
                <EditIcon />
              </IconButton>
            )}
            <IconButton
              color="inherit"
              onClick={() => updateNote({ ...note, favorite: !note.favorite })}
            >
              {note.favorite ? <StarIcon /> : <StarBorderIcon />}
            </IconButton>
            <IconButton color="inherit" onClick={() => updateNote({...note, color: tinycolor.random().toHexString()})}>
              <ColorLensIcon />
            </IconButton>
            <IconButton
              color="inherit"
              onClick={() => deleteNote(note.id)}
              disabled={isDeleting}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        </Stack>
      </CardActions>
    </Card>
  );
};
