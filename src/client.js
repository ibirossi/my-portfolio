//connect react with sanity to pass data
import sanityClient from '@sanity/client'

export default sanityClient ({
    projectId: "gnfumd7q",
    dataset: "production",
    useCdn: true,
})