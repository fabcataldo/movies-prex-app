export const formatDate = (date: string): string => {
    const dateSplitted = ('2024-01-17T16:47:47.987Z'.split('T')[0]).split('-');
    return `${dateSplitted[0]}/${dateSplitted[1]}/${dateSplitted[2]}`;
}