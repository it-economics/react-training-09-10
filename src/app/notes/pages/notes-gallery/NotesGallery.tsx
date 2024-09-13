import { AddIcCall } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import { Box, Fab } from '@mui/material';
import { useAddNote, useNotes } from '../../api/notes-api';

export const NotesGallery = () => {
  const notes = useNotes();
  const {mutateAsync: addNewNote} = useAddNote()

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
        {notes.map((note) => (
          <span key={note.id}>{note.title}</span>
        ))}
      </Box>
      <Box
        sx={{ position: 'absolute', bottom: '1.5rem', right: '1.5rem' }}
      >
        <Fab color="primary" aria-label={'add note'} onClick={() => addNewNote({title: 'new note 123123', text: ''})}><AddIcon /></Fab>
      </Box>
    </Box>
  );
};
