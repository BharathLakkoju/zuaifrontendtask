import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FileInfo {
  name: string;
  size: number;
  type: string;
  lastModified: number;
  courseworkType?: string | "Report";
  subject?: string | "Physics";
  essayTitle: string;
}

interface FileStore {
  files: FileInfo[];
  addFiles: (newFiles: FileInfo[]) => void;
  removeFile: (fileName: string) => void;
}

export const useFileStore = create<FileStore>()(
  persist(
    (set) => ({
      files: [],
      addFiles: (newFiles) =>
        set((state) => ({
          files: [...state.files, ...newFiles],
        })),
      removeFile: (fileName) =>
        set((state) => ({
          files: state.files.filter((file) => file.name !== fileName),
        })),
    }),
    {
      name: "file-storage",
    }
  )
);
