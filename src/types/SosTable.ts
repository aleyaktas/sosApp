export interface TableProps {
  selectedCells: string[];
  setSelectedCells: React.Dispatch<React.SetStateAction<string[]>>;
  selectedSymbols?: string[];
  setSelectedSymbols?: React.Dispatch<React.SetStateAction<string[]>>;
  selectedCell: string;
  selectedSymbol?: string;
  isSymbolActive: boolean;
}
