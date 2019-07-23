import React from 'react';
export interface HierarchyBaseNode {
    id: string;
    name: string;
    parentId: string | null;
}
export interface HierarchyProps {
    selectedNodeId: string;
    nodeHierarchy: ReadonlyArray<HierarchyBaseNode>;
    loading?: boolean;
    onNodeSelected(id: string): void;
}
export interface HierarchyState {
    nodeChildren: Record<string, ReadonlyArray<HierarchyBaseNode>>;
    rootNodes: ReadonlyArray<HierarchyBaseNode>;
    searchInputValue?: string;
    expansion: Record<string, boolean>;
    searchResults: Record<string, boolean>;
}
export declare class Hierarchy extends React.Component<HierarchyProps, HierarchyState> {
    constructor(props: HierarchyProps);
    componentDidUpdate: (prevProps: HierarchyProps) => void;
    buildTree: (nodeHierarchy: readonly HierarchyBaseNode[], selectedNodeId: string, prevExpansion?: Record<string, boolean>) => {
        nodeChildren: Record<string, readonly HierarchyBaseNode[]>;
        rootNodes: readonly HierarchyBaseNode[];
        expansion: Record<string, boolean>;
    };
    getAncestors: (nodeHierarchy: readonly HierarchyBaseNode[], nodeId: string) => readonly string[];
    getNodeChildren: (node: HierarchyBaseNode) => readonly HierarchyBaseNode[];
    onNodeSelected: (node: string | HierarchyBaseNode) => () => void;
    onSearchChange: (searchInputValue?: string) => void;
    cacheSearchResults: (nodeHierarchy: readonly HierarchyBaseNode[], searchTerm: string) => readonly HierarchyBaseNode[];
    cleanSearchTerm: (inputValue?: string) => string;
    cacheNodeSearchResults: (node: HierarchyBaseNode, searchTerm: string) => boolean;
    nodeMatchesSearch: (node: HierarchyBaseNode, searchTerm: string) => boolean;
    onExpansionChange: (node: string | HierarchyBaseNode) => (expanded: boolean) => void;
    getNodesToDisplay: (nodes: readonly HierarchyBaseNode[]) => readonly HierarchyBaseNode[];
    getNodeChildrenToDisplay: (node: HierarchyBaseNode) => readonly HierarchyBaseNode[];
    onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    renderNodeName: (node: HierarchyBaseNode) => JSX.Element;
    renderNode: (node: HierarchyBaseNode) => JSX.Element;
    render: () => JSX.Element;
}
