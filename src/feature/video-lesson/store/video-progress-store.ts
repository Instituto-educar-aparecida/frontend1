import { create } from "zustand";
import { type VideoProgressPayload } from "../types/video-progress";

interface VideoProgressState {
  lastSavedPayload: VideoProgressPayload | null;
  isSaving: boolean;
  setLastSaved: (payload: VideoProgressPayload) => void;
  setIsSaving: (value: boolean) => void;
}

export const useVideoProgressStore = create<VideoProgressState>((set) => ({
  lastSavedPayload: null,
  isSaving: false,
  setLastSaved: (payload) => set({ lastSavedPayload: payload }),
  setIsSaving: (value) => set({ isSaving: value }),
}));
