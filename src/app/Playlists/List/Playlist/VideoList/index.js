import React from "react";
import Left from "./Left";
import Right from "./Right";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { PlVideo, PlVideoContainer } from "./styles/indexStyles";

const VideoList = ({ playlist, deleteVideo, playlistKey, reOrderPlaylist }) => {
  const onDragEnd = result => {
    const { destination, source } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const pl = playlist.slice();
    const [removed] = pl.splice(source.index, 1);
    const newOrder = [
      ...pl.slice(0, destination.index),
      removed,
      ...pl.slice(destination.index)
    ];
    reOrderPlaylist(playlistKey, newOrder);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {provided => (
          <PlVideoContainer ref={provided.innerRef}>
            {playlist.map((video, i) => (
              <Draggable draggableId={video.id} index={i} key={video.id}>
                {provided => (
                  <PlVideo
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    <Left title={video.title} index={i} />
                    <Right
                      duration={video.duration}
                      deleteVideo={deleteVideo}
                      playlistKey={playlistKey}
                      index={i}
                    />
                  </PlVideo>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </PlVideoContainer>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default VideoList;
