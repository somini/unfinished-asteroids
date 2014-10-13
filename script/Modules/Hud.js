app.game.hud = {

  render: function(delta) {

    var player = app.game.players[0];

    this.renderBar(16, 16, 80, 6, player.hp / player.maxHp, "#08f");

    this.renderScore(player.team, "white");

  },

  renderBar: function(x, y, width, height, progress, color) {

    app.layer.fillStyle("#000").fillRect(x, y, width, height);
    app.layer.fillStyle(color).fillRect(x, y, width * progress, height);

  },


  renderScore: function(team, color) {

    score = app.game.getScore(team);
    app.layer.fillStyle(color).font("32px Helvetica").textAlign("right")
      .fillText( score ,app.layer.width - 16,32);

  }

};
