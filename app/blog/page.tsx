//  Static Params

//  Index page for dynamic slug
//   Pre-renders by telling Next what the routes are and what to cache and what to expect

export default function getStaticParams() {
    return [
        {slug: 'learn-to-code'},
        {slug: 'angular-vs-react'}
    ]
}
