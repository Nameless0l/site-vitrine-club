"use client"

import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { Avatar, Button, Modal, Box, Typography } from '@mui/material';
import { PersonAdd, Event, Book } from '@mui/icons-material';

const FamilyTree = ({ data }) => {
    const svgRef = useRef(null);
    const [selectedMember, setSelectedMember] = useState(null);
    const [isAddMemberModalOpen, setIsAddMemberModalOpen] = useState(false);
    const [isAddEventModalOpen, setIsAddEventModalOpen] = useState( false);
    const [isAddStoryModalOpen, setIsAddStoryModalOpen] = useState(false);

    useEffect(() => {
        if (data && svgRef.current) {
            const width = 1000;
            const height = 600;

            const svg = d3.select(svgRef.current)
                .attr('width', width)
                .attr('height', height);

            const tree = d3.tree().size([height, width - 200]);
            const root = d3.hierarchy(data);

            const link = svg.selectAll('.link')
                .data(tree(root).links())
                .enter().append('path')
                .attr('class', 'link')
                .attr('d', d3.linkHorizontal()
                    .x(d => d.y)
                    .y(d => d.x));

            const node = svg.selectAll('.node')
                .data(root.descendants())
                .enter().append('g')
                .attr('class', 'node')
                .attr('transform', d => `translate(${d.y},${d.x})`)
                .on('click', (event, d) => setSelectedMember(d.data));

            node.append('circle')
                .attr('r', 30);

            node.append('image')
                .attr('xlink:href', d => d.data.photo || '/default-avatar.png')
                .attr('x', -25)
                .attr('y', -25)
                .attr('width', 50)
                .attr('height', 50)
                .attr('clip-path', 'circle(25px at center)');

            node.append('text')
                .attr('dy', 50)
                .attr('text-anchor', 'middle')
                .text(d => `${d.data.name}, ${d.data.age}`);

            node.append('image')
                .attr('xlink:href', d => `/flags/${d.data.country}.png`)
                .attr('x', 20)
                .attr('y', -40)
                .attr('width', 20)
                .attr('height', 20);
        }
    }, [data]);

    const handleAddMember = () => {
        setIsAddMemberModalOpen(true);
    };

    const handleAddEvent = () => {
        setIsAddEventModalOpen(true);
    };

    const handleAddStory = () => {
        setIsAddStoryModalOpen(true);
    };

    return (
        <Box sx={{ position: 'relative', width: '100%', height: '100vh' }}>
            <svg ref={svgRef}></svg>
            <Box sx={{ position: 'absolute', top: 20, right: 20 }}>
                <Button startIcon={<PersonAdd />} onClick={handleAddMember}>Add Member</Button>
                <Button startIcon={<Event />} onClick={handleAddEvent}>Add Event</Button>
                <Button startIcon={<Book />} onClick={handleAddStory}>Add Story</Button>
            </Box>

            <Modal open={isAddMemberModalOpen} onClose={() => setIsAddMemberModalOpen(false)}>
                <Box sx={{ /* Modal styles */ }}>
                    <Typography variant="h6">Add New Family Member</Typography>
                    {/* Add member form */}
                </Box>
            </Modal>

            <Modal open={isAddEventModalOpen} onClose={() => setIsAddEventModalOpen(false)}>
                <Box sx={{ /* Modal styles */ }}>
                    <Typography variant="h6">Add New Family Event</Typography>
                    {/* Add event form */}
                </Box>
            </Modal>

            <Modal open={isAddStoryModalOpen} onClose={() => setIsAddStoryModalOpen(false)}>
                <Box sx={{ /* Modal styles */ }}>
                    <Typography variant="h6">Add New Story</Typography>
                    {/* Add story form */}
                </Box>
            </Modal>
        </Box>
    );
};

export default FamilyTree;