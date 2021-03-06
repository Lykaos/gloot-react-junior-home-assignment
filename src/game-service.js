/**
 * This file handles all the communication with the server.
 * The different endpoints are described in server.js.
 */
const apiUrl = 'http://localhost:3000'

export async function getGames() 
{
    const resp = await fetch(`${apiUrl}/game`)
    return await resp.json()
}

export async function addGame(gameName, gameURL) 
{
    const resp = await fetch(`${apiUrl}/game`,
    {
        method: 'POST',
        headers:
        {
            "Content-type": "application/json"
        },
        body: JSON.stringify(
        {
            "name": gameName,
            "url": gameURL
        })
    })
    return await resp.json()
}

export async function editGame(GameId, gameName, gameURL) 
{
    const resp = await fetch(`${apiUrl}/game/${GameId}`,
    {
        method: 'PUT',
        headers:
        {
            "Content-type": "application/json"
        },
        body: JSON.stringify(
        {
            "name": gameName,
            "url": gameURL
        })
    })
    return await resp.json()
}

export async function deleteGame(gameId) 
{
    const resp = await fetch(`${apiUrl}/game/${gameId}`, { method: 'DELETE' })
    return await resp.json()
}