/* Libraries */
import React from 'react'
import ReactDOM from 'react-dom'

/* Components */
import { getGames, addGame, editGame, deleteGame } from './game-service'

/* Styles */
import './style.css'

class App extends React.Component 
{
    state = 
    {
        games: []
    }

    componentDidMount = async () => 
    {
        this.getGames()
    }

    getGames = async () => 
    {
        const games = await getGames()
        this.setState({ games })
    }

    setNewNameState = () =>
    {
        this.setState({ newGameName: event.target.value })
    }

    setNewURLState = () =>
    {
        this.setState({ newGameURL: event.target.value })
    }
      
    addGame = async () => 
    {
        await addGame(this.state.newGameName, this.state.newGameURL)
        this.getGames()
    }
 
    editGame = async id => 
    {
        await editGame(id, this.state.newGameName, this.state.newGameURL)
        this.getGames()
    }

    deleteGame = async id => 
    {
        await deleteGame(id)
        this.getGames()
    }

    render() 
    {
        return (
            <div>
                <div id='header'>
                    <div id='title'>Game Library
                    <button id='addGameButton' onClick={() => this.addGame()}>+</button>
                    <input className='inputField' placeholder="Image URL" onChange={this.setNewURLState}/>
                    <input className='inputField' placeholder="Game name" onChange={this.setNewNameState}/>
                    </div>
                </div>

                <div id='content'>
                    {this.state.games.map(game => 
                    (
                        <div>
                            <button className='deleteButton' onClick={() => this.deleteGame(game.id)}>Delete</button>
                            <button className='editButton' onClick={() => this.editGame(game.id)}>Edit</button>
                            <div className='itemList' key={game.id} style=
                                {{
                                    backgroundImage: `url(${game.url})`, 
                                    backgroundSize: '100%', 
                                    backgroundPosition: 'center center',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover'
                                }}>
                                <label className='gameLabel'>{game.name}</label>		
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app-container'))