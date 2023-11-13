export const publishPostInOutSource = async (state: any, session: any) => {
    const host = window.location.host;
    const protocal = process?.env.NODE_ENV === 'development' ? 'http' : 'https';
    let res = await fetch(`${protocal}://${host}/api/post`, {
        cache: 'force-cache',
        method: 'POST',
        body: JSON.stringify({
            post: {
                title: state.title,
                content: state.content,
                author: session?.user?.name,
            },
        }),
    });
    return await res.json();
};