import {createSelector} from 'reselect'

const selectDirectory = state => state.directory

export const selectoryDirectorySelections = createSelector(
    [selectDirectory],
    directory => directory.sections
)