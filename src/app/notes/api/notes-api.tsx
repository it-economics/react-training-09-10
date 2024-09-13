import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getToken } from '../../auth/auth-utils';
import { Note } from '../model/notes';

const API_URL = 'https://qdw00908-9000.euw.devtunnels.ms';

interface NotesResponse {
  notes: Record<string, Note>;
}

const fetchNotes = () =>
  fetch(`${API_URL}/notes`, {
    ...getHeaders(),
  })
    .then((response) => response.json() as unknown as NotesResponse)
    .then((response) => Object.values(response.notes));

const getHeaders = () => ({
  headers: {
    authorization: `Bearer ${getToken()}`,
    'Content-Type': 'application/json',
  },
});

const addNote = (note: Note) =>
  fetch(`${API_URL}/notes`, {
    method: 'PUT',
    body: JSON.stringify({ note }), // {note: {id: ', title: '', ...}}
    ...getHeaders(),
  });

const NOTES_QUERY_KEY = ['notes'];

export const useNotes = () => {
  const { data } = useQuery({ queryKey: NOTES_QUERY_KEY, queryFn: fetchNotes });
  return data ?? [];
};

export const useAddNote = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: NOTES_QUERY_KEY });
    },
  });
};
