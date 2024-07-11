export function redirectPrevious(exceptions = [], fallback = '/') {
    let lastPage = document.referrer

    if (lastPage) {
        let lastPagePath = new URL(lastPage).pathname
        let isException = exceptions.some(exception => lastPagePath.includes(exception))

        if (!isException) {
            window.location.href = lastPage
            return
        }
    }

    window.location.href = `${fallback}`
}