let posts = [
    {
        postId: 121,
        image: "image_of_cat.jpg",
        description: "Cute cat sleeping on a sofa",
        likes: 234,
        comments: 23,
        share: 13
    },
    {
        postId: 122,
        image: "sunset_beach.jpg",
        description: "Beautiful sunset at the beach",
        likes: 567,
        comments: 45,
        share: 28
    },
    {
        postId: 123,
        image: "mountain_view.jpg",
        description: "Hiking adventure in the mountains",
        likes: 789,
        comments: 67,
        share: 34
    },
    {
        postId: 124,
        image: "coffee_cup.jpg",
        description: "Morning coffee vibes ☕",
        likes: 321,
        comments: 19,
        share: 11
    },
    {
        postId: 125,
        image: "puppy_playing.jpg",
        description: "Puppy enjoying the park",
        likes: 923,
        comments: 88,
        share: 41
    },
    {
        postId: 126,
        image: "city_lights.jpg",
        description: "Night view of the city skyline",
        likes: 456,
        comments: 31,
        share: 22
    },
    {
        postId: 127,
        image: "food_pasta.jpg",
        description: "Homemade creamy pasta 🍝",
        likes: 678,
        comments: 52,
        share: 30
    },
    {
        postId: 128,
        image: "cricket_match.jpg",
        description: "What a match! Last over thriller.",
        likes: 1102,
        comments: 142,
        share: 75
    },
    {
        postId: 129,
        image: "coding_setup.jpg",
        description: "Late night coding session 💻",
        likes: 845,
        comments: 63,
        share: 37
    },
    {
        postId: 130,
        image: "waterfall_trip.jpg",
        description: "Weekend trip to a hidden waterfall",
        likes: 712,
        comments: 54,
        share: 29
    }
];

let postId = 103

FindPost(postId).then(function(post){
    console.log(post)
}).catch(function(err){
    console.log(err.message)
})





function FindPost (postId){
    let promise = new Promise(function(resolve,reject){
        let post = posts.find(p => p.postId == postId)
        if(post){
            setTimeout(() => {
                resolve(post)
            }, 3000);
        }
        else{
            setTimeout(() => {
                reject(new Error("Post not found !!"))
            }, 2000);
        }
         
       
    })
    return promise
} 


