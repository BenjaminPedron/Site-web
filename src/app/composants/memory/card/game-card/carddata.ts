export interface CardData {
    imageId: string;
    state: 'initial' | 'default' | 'flipped' | 'matched' | void;
}