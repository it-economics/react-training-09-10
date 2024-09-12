import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Issue, issueFactory } from './model/issue';
import { RootState } from '../redux/store';
import { useAppSelector } from '../redux/hooks';

const API_URL = 'https://g3jnmwch-9000.euw.devtunnels.ms';

const getAuthHeaders = () => {
  const token = '4d77f6aa-40b8-418d-b87e-a8018ca4a62d'; // getToken();
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };
};

type IssueTrackerState = {
  issues: Issue[];
};

const initialState: IssueTrackerState = {
  issues: [],
};

export const fetchIssues = createAsyncThunk('issues/fetch', async () => {
  const response = await fetch(`${API_URL}/issues`, getAuthHeaders());
  const data = await response.json();
  return (data.issues as Issue[]) || [];
});

export const storeIssues = createAsyncThunk(
  'issues/store',
  async (_arg, { getState }) => {
    const issues = (getState() as RootState).issueTracker.issues;
    await fetch(`${API_URL}/issues`, {
      ...getAuthHeaders(),
      method: 'POST',
      body: JSON.stringify({ issues }),
    }).then((res) => res.json());
  }
);

export const issueTracketSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {
    add: (state) => {
      state.issues.push(issueFactory());
    },
    remove: (state, action: PayloadAction<string>) => {
      state.issues = state.issues.filter(
        (issue) => issue.id !== action.payload
      );
    },
    update: (state, action: PayloadAction<Partial<Issue>>) => {
      console.log(action);
      state.issues = state.issues.map((it) =>
        it.id === action.payload.id ? { ...it, ...action.payload } : it
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchIssues.fulfilled, (state, action) => {
      state.issues = action.payload;
    });
    builder.addCase(fetchIssues.rejected, (state, action) => {
      // handle error state
    });
  },
});

export const { add, remove, update } = issueTracketSlice.actions;
const issuesSelector = (state: RootState) => state.issueTracker.issues;
export const useIssues = () => useAppSelector(issuesSelector);
