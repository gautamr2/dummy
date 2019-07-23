import { HierarchyBaseNode } from './Hierarchy';
export interface CreateKeyboardNavHelpersArgs {
    expansion: Record<string, boolean>;
    nodes: ReadonlyArray<HierarchyBaseNode>;
    nodeChildren: Record<string, ReadonlyArray<HierarchyBaseNode>>;
    onSelect(node: HierarchyBaseNode | string): void;
    onExpansionChange(nodeId: string, expansion: boolean): void;
}
export declare const createKeyboardNavHelpers: ({ expansion, nodes, nodeChildren, onSelect, onExpansionChange, }: CreateKeyboardNavHelpersArgs) => {
    hasChildren: (nodeId: string) => boolean;
    getNode: (nodeId: string) => HierarchyBaseNode;
    getChildren: (nodeId: string) => readonly HierarchyBaseNode[];
    isExpanded: (nodeId: string) => boolean;
    isExpandedWithChildren: (nodeId: string) => boolean;
    getSiblings: (nodeId: string) => readonly HierarchyBaseNode[];
    selectFirstChild: (nodeId: string) => void;
    selectFollowingNode: (nodeId: string) => void;
    selectLastExpandedDescendent: (nodeId: string) => string;
    selectPrecedingNode: (nodeId: string) => void;
    selectParent: (nodeId: string) => void;
    handleLeftArrow: (selectedNodeId: string) => void;
    handleRightArrow: (selectedNodeId: string) => void;
    handleDownArrow: (selectedNodeId: string) => void;
    handleUpArrow: (selectedNodeId: string) => void;
};
