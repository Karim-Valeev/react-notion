export const all = (state) => state.noteBlocks;
export const noteBlocks = (state) => state.noteBlocks.blocks;
export const noteBlock = (state) => state.noteBlocks.block;
export const isEmptyBlock = (state) => state.noteBlocks.blocks.length === 0;
