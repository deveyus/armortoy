interface IElemental {
    name: string;
    isTrace: boolean;
    // Minimum and maximum occurence per kilogram of ore
    minimumOccurence: number;
    maximumOccurence: number;
    props: IElementalProps;
}

interface IElementalProps {
    meltingPoint: number;
    malleability: number;
    conductivity: number;
    hardness: number;
}