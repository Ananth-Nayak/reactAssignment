import React from "react"
import DynamicLayout from "./DynamicLayout";

const App = () => {
  
    // array containing image url
    const imageUrl = [
        "https://media.istockphoto.com/id/505221662/photo/elephants-in-river.jpg?s=612x612&w=0&k=20&c=pd0-eIKu1knUVrwVJRqfIK8t_aFqSk6vnxnuZLFGvh4=",
        "https://media.istockphoto.com/id/511593366/photo/tropical-jungle.jpg?s=2048x2048&w=is&k=20&c=YnmT4WVyIsGm3KpzQtawiO5WinrrsxdC6aoKCOAVixk=",
        "https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=2048x2048&w=is&k=20&c=V1LRnPCSzAwCxYoRadXQKQHaGiBRt6TO2btwLLcYcL4=",
        "https://media.istockphoto.com/id/1442179368/photo/maldives-island.jpg?s=2048x2048&w=is&k=20&c=wi39rl8i15jpaRuEQSceOYNlHYVTsa901ld8Wtq0q-0=",
        "https://media.istockphoto.com/id/1337232523/photo/high-angle-view-of-a-lake-and-forest.jpg?s=612x612&w=0&k=20&c=72ZZZG5jNaEE0QRq6o4pUk3CI0gG-Lw5AeWQUVgO7zQ=",
        "https://media.istockphoto.com/id/1180494132/photo/dandelion.jpg?s=612x612&w=0&k=20&c=DMaGlFh2uiAfqCDjHos74YtmmmSZjDOTxU9bjjX33D8=",
        "https://media.istockphoto.com/id/670688480/photo/green-tea-plantations-munnar-kerala-india.jpg?s=612x612&w=0&k=20&c=b09pbKjviHDfBg4sviMO5Pjwq_KhcpgsMHquKrLQBdU=",
        "https://media.istockphoto.com/id/944812540/photo/mountain-landscape-ponta-delgada-island-azores.jpg?s=612x612&w=0&k=20&c=mbS8X4gtJki3gGDjfC0sG3rsz7D0nls53a0b4OPXLnE=",
        "https://media.istockphoto.com/id/932650548/photo/aurora-borealis-in-iceland-at-jakulsarlon.jpg?s=612x612&w=0&k=20&c=McMalpWH3z2oIMdjiXDAKb7ywJsdy2I35BHO4r2o4y8=",
        "https://media.istockphoto.com/id/1341193833/photo/fields-of-lupines-along-a-path.jpg?s=612x612&w=0&k=20&c=mhmXy7IvZDw4qR8CQ9ZW00LGFxHW_GAQxsyQPQQZRQI=",
        "https://media.istockphoto.com/id/485371557/photo/twilight-at-spirit-island.jpg?s=612x612&w=0&k=20&c=FSGliJ4EKFP70Yjpzso0HfRR4WwflC6GKfl4F3Hj7fk=",
        "https://media.istockphoto.com/id/1367357589/photo/red-heart-shaped-sky-at-sunset-beautiful-landscape-with-flowers-love-background-with-copy.jpg?s=612x612&w=0&k=20&c=VbyUaFaEvR_hAGtDmcbyw7X3E7KPVmW4GYxEYjbBGOk="
    ]


    return (
        <div>
            <DynamicLayout url = {imageUrl}/>
        </div>
    )

};

export default App;
