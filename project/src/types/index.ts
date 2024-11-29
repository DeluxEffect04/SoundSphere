export interface User {
  id: string;
  name: string;
  avatar: string;
  role: string[];
  bio: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  creator: User;
  collaborators: User[];
  genre: string[];
  status: 'open' | 'in-progress' | 'completed';
  createdAt: string;
}

export interface Track {
  id: string;
  title: string;
  artist: User;
  audioUrl: string;
  waveform: string;
  duration: number;
  comments: Comment[];
  reactions: Reaction[];
}

export interface Comment {
  id: string;
  user: User;
  content: string;
  timestamp: string;
}

export interface Reaction {
  id: string;
  user: User;
  type: '❤️' | '🔥' | '👏' | '🎵';
}