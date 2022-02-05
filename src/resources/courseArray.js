let courseArray = [
    {
        name: "Basic Electrical Engineering",
        topics: [
            {
                name: "Thevenin's Theorem",
                subTopics: [
                    {
                        name: "theory",
                        resources: {
                            video: "render video",
                            audio: "render audio",
                            ppt: "render PPT"
                        }

                    },
                    {
                        name: "Application",
                        resources: {
                            video: "render video",
                            audio: "render audio",
                            // ppt: "render PPT"
                        }

                    }
                ]
            },
            {
                name: "Nortons's Theorem",
                subTopics: [
                    {
                        name: "theory",
                        resources: {
                            video: "render video",
                            audio: "render audio",
                            ppt: "render PPT"
                        }

                    },
                    {
                        name: "Application",
                        resources: {
                            video: "render video",
                            // audio: "render audio",
                            ppt: "render PPT"
                        }

                    }
                ]
            }
        ]
    },
    {
        name: "Control Engineering",
        topics: [
            {
                name: "Control's Theorem",
                subTopics: [
                    {
                        name: "theory",
                        resources: {
                            video: "render video",
                            audio: "render audio",
                            ppt: "render PPT"
                        }

                    },
                    {
                        name: "Application",
                        resources: {
                            video: "render video",
                            audio: "render audio",
                            // ppt: "render PPT"
                        }

                    }
                ]
            },
            {
                name: "Render's Theorem",
                subTopics: [
                    {
                        name: "theory",
                        resources: {
                            video: "render video",
                            audio: "render audio",
                            ppt: "render PPT"
                        }

                    },
                    {
                        name: "Application",
                        resources: {
                            video: "render video",
                            // audio: "render audio",
                            ppt: "render PPT"
                        }

                    }
                ]
            }
        ]
    }
]


function changeSubjectName(courseArray, index, newName) {

    console.log(courseArray)
    let newObject = courseArray[index]
    console.log(newObject)
    newObject.name = newName
    courseArray[index] = newObject
    console.log(courseArray)
}
changeSubjectName(courseArray, 0, "siddhart")

// console.log(courseArray)





// export default courseArray