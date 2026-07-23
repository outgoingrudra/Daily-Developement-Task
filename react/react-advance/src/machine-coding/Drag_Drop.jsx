import { useRef, useState } from "react";

export default function Draggable({ initialState }) {
  const [data, setData] = useState(initialState);

  const draggedTopic = useRef(null);
  const draggedTask = useRef(null);

  const handleDragStart = (e, topic, task) => {
    draggedTopic.current = topic;
    draggedTask.current = task;
    e.currentTarget.style.opacity = "0.5";
  };

  const handleDragEnd = (e) => {
    e.currentTarget.style.opacity = "1";
  };

  const handleDrop = (e, targetTopic) => {
    e.preventDefault();

    const sourceTopic = draggedTopic.current;
    const currentTask = draggedTask.current;

    if (!sourceTopic || currentTask === null) return;

    setData((prev) => {
      const newData = {
        ...prev,
        [sourceTopic]: [...prev[sourceTopic]],
        [targetTopic]: [...prev[targetTopic]],
      };

      // Remove task from its previous topic
      newData[sourceTopic] = newData[sourceTopic].filter(
        (task) => task !== currentTask
      );

      // Add task to the new topic
      newData[targetTopic].push(currentTask);

      return newData;
    });

    draggedTopic.current = null;
    draggedTask.current = null;
  };

  return (
    <div className="container">
      {Object.keys(data).map((topic) => (
        <div
          key={topic}
          className="box"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, topic)}
        >
          <div className="topic">{topic}</div>

          <div className="box-details">
            {data[topic].map((task, index) => (
              <div
                key={`${topic}-${task}-${index}`}
                className="task"
                draggable
                onDragStart={(e) => handleDragStart(e, topic, task)}
                onDragEnd={handleDragEnd}
              >
                {task}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}



// initialState =  const data = {
//     todo: ["SQL", "JS", "MongoDB"],
//     Progress: ["DSA", "LLD"],
//     completed: ["CPP", "React"],
//   };