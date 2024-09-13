import AddIcon from '@mui/icons-material/Add';
import { Box, Divider, Fab, Grid2 } from '@mui/material';
import { useAddNote, useNotes } from '../../api/notes-api';
import { NoteCard } from '../../components/NoteCard';

export const NotesGallery = () => {
  const notes = useNotes();
  const { mutateAsync: addNewNote } = useAddNote();

  const favoriteNotes = notes.filter((note) => note.favorite);
  const regularNotes = notes.filter((note) => !note.favorite);

  return (
    <Box sx={{ width: '100%', height: 'calc(100% - 40px)' }}>
      <Box
        sx={{
          width: 'calc(100% - 4rem)',
          height: 'calc(100% - 4rem)',
          position: 'relative',
          padding: '2rem',
          overflow: 'auto',
        }}
      >
        {favoriteNotes.length > 0 && (
          <>
            <Grid2 container spacing={2}>
              {favoriteNotes.map((note) => (
                <Grid2
                  size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}
                  key={note.id}
                >
                  <NoteCard note={note} />
                </Grid2>
              ))}
            </Grid2>
            <Divider />
          </>
        )}
        <Grid2 container spacing={2}>
          {regularNotes.map((note) => (
            <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }} key={note.id}>
              <NoteCard note={note} />
            </Grid2>
          ))}
        </Grid2>
      </Box>
      <Box sx={{ position: 'absolute', bottom: '1.5rem', right: '1.5rem' }}>
        <Fab
          color="primary"
          aria-label={'add note'}
          onClick={() => addNewNote({ title: 'new note 123123', text: '' })}
        >
          <AddIcon />
        </Fab>
      </Box>
    </Box>
  );
};
