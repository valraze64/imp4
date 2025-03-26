export type LineChartProps = {
    data: LineChartData;
};

export type LineChartData = {
    title: string;
    values: Number[];
    categories:string[];
    series: {
        type?: string;
        name: string;
        data: number[];
    }[];
};