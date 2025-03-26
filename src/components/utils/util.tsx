export const filterQuarters = (array: string[]) => {
   return (array.filter((item: string) => !item.startsWith("Q"))
|| [])
}
export const sortArray = (array: string[]) => {
   return array.sort((a: string, b: string) => {
        // Sort numerically based on the number after "P"
        const numA = parseInt(a.replace(/[^0-9]/g, ""), 10);
        const numB = parseInt(b.replace(/[^0-9]/g, ""), 10);
        return numA - numB;
    })
}
export {};
    // Sort numerically based on the number after "P"