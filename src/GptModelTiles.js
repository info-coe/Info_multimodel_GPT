import React from "react";
import LLMGPT from "./Images/Black-Modern.mp4";
import scholarllm from "./Images/scholar-llm.gif";
import Networkingllm from "./Images/Networking-llm.gif";
import Medillm from "./Images/Medi-llm.gif";
import Mathllm from "./Images/Math-llm.gif";
import Identifierllm from "./Images/identifier-llm.gif";
import Codingllm from "./Images/coding-llm.gif";
import VideoPlayer from "./VideoPlayer";

export default function GptModelTiles() {
  const GptModels = [
    {
      title: "Gpt Model 1",
      image: Codingllm,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      title: "Gpt Model 2",
      image: scholarllm,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      title: "Gpt Model 3",
      image: Networkingllm,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      title: "Gpt Model 4",
      image: Medillm,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      title: "Gpt Model 5",
      image: Mathllm,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      title: "Gpt Model 6",
      image: Identifierllm,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      title: "Gpt Model 7",
      image: LLMGPT,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      title: "Gpt Model 8",
      image: LLMGPT,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      title: "Gpt Model 9",
      image: LLMGPT,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      title: "Gpt Model 10",
      image: LLMGPT,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      title: "Gpt Model 11",
      image: LLMGPT,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      title: "Gpt Model 12",
      image: LLMGPT,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    }
  ];

  return (
    <div className="container">
      <div className="grid-container">
        {GptModels.map((item, index) => (
          <div className="grid-item" key={index}>
            <h3 className="text-center">{item.title}</h3>

            {["jpg", "jpeg", "png", "gif", "bmp", "webp"].includes(
              item.image.split(".").pop().toLowerCase()
            ) ? <img src={item.image} alt="GPT Model" width="100%"></img>:null}

            {['mp4', 'webm', 'ogg'].includes(
              item.image.split(".").pop().toLowerCase()
            ) ?
            <VideoPlayer
                src={item.image} 
                controls={true} 
                loop={true} 
                muted={true} 
            />
            : null}

            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
