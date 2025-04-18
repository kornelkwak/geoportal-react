import { useState } from 'react';
import styled from 'styled-components';
import React from 'react';

interface PanelProps {
    $isOpen: boolean;
}

interface ToggleButtonProps {
    $isOpen: boolean;
}

const Panel = styled.div<PanelProps>`
    position: fixed;
    top: 0;
    left: ${props => props.$isOpen ? '0' : '-300px'};
    width: 300px;
    height: 100vh;
    background: #363636;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    transition: left 0.3s ease;
    z-index: 1000;
    padding: 20px;
    box-sizing: border-box;
    overflow-y: auto;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-weight: 500;
    color: white;
`;

const ToggleButton = styled.button<ToggleButtonProps>`
    position: fixed;
    left: ${props => props.$isOpen ? '300px' : '0'};
    top: 50%;
    transform: translateY(-50%);
    z-index: 1001;
    padding: 10px 10px 10px 15px;
    background: #363636;
    color: white;
    font-weight: bold;
    font-size: 20px;
    border: 1px solid #ccc;
    border-left: none;
    cursor: pointer;
    transition: left 0.3s ease;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    border-radius: 0 50% 50% 0;
`;

const Title = styled.h3`
    margin: 0 0 20px 0;
    padding-bottom: 10px;
    border-bottom: #404040
`;

const LayerList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const LayerItem = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px;
`;

const Label = styled.label`
    cursor: pointer;
    font-size: 14px;
`;

const Checkbox = styled.input`
    margin: 0;
`;

/**
 * Props for the LayerManager component.
 */
interface LayerManagerProps {
    layers: any[];
    onToggleLayer: (layerId: string) => void;
}

/**
 * LayerManager component for managing map layers.
 * @param {LayerManagerProps} props - The props for the component.
 * @returns {JSX.Element} - The rendered component.
 */
const LayerManager: React.FC<LayerManagerProps> = ({ layers, onToggleLayer }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <>
            <ToggleButton 
                $isOpen={isOpen}
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? '<' : '>'}
            </ToggleButton>
            <Panel $isOpen={isOpen}>
                <Title>Layers</Title>
                <LayerList>
                    {layers.map(layer => (
                        <LayerItem key={layer.id}>
                            <Checkbox
                                type="checkbox"
                                id={layer.id}
                                checked={layer.visible}
                                onChange={() => onToggleLayer(layer.id)}
                            />
                            <Label htmlFor={layer.id}>
                                {layer.name}
                            </Label>
                        </LayerItem>
                    ))}
                </LayerList>
            </Panel>
        </>
    );
};

export default LayerManager;
