# breakout-typescript
A Vanilla TS Object-Oriented implementation of the classic Breakout game.

![ts_breakout](https://github.com/programmist/breakout-typescript/assets/527082/92b2f402-a022-4e20-bd40-70db42bc8357)

## To Play
- Clone this project
- `cd` into the `breakout-typescript` directory
- Execute `npm install` to install vite and other deps
- Execute `npm run start` to open the game at [http://localhost:5500/](http://localhost:5500/)
- Refresh browser tab to restart game (game controls soon)


## Feature TODO
- Start Game in pre-game state
  - Show computer-controlled demo behind start game instructions
- Add Game controls
  - Start
  - Pause
  - Restart
- Add Score
- Add "lives" and ability to get gain lives
- Add Sound effects
- Add themes and colors
- Add collision animations
- Add levels
  - Different shapes
  - Different types of bricks
  - Different brick textures and color themes
  - Different soundtrack

## Bells & Whistles™ TODO
### Special Bricks
- Bricks that impart "power-ups" when destroyed
- Bricks that explode and shower artifacts that, if contacted by the paddle, impart timed penalties
- Bricks that release extra balls to play multiple balls at-a-time (juggle time)
- Bricks that release special balls

### Special Balls
- Powerball: a ,more powerful ball with a lightning and thunder effect
- Speedball: A fast-moving ball
- Crazyball: bounces in unpredictable ways and doesn't always move in a straight line)

### Power-Ups
Temporary paddle enhancements that time out

- Bigger paddle
- Speedy paddle
- Power Volley
  - Propels the ball faster and can break multiple bricks at once
  - Requires cool-down period after each use

### Penalties
Temporary paddle penalties that time out

- Short paddle
- Slower paddle movement

### Anomalies
These are characters that visit the game, randomly, for a short time to increase the difficulty

- Cat
  - Blocks the player's shot and bats the ball back at the player randomly
  - Cat can't be harmed by the ball.
- UFO
  - Shoots laser beams that impart penalties when they hit the paddle
  - Hitting the UFO with the ball destroys it and gains the player an extra life
- ?