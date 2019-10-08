import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor() { }

  gameOver = false

  OneImage = null
  TwoImage = null
  ThreeImage = null
  FourImage = null
  FiveImage = null
  SixImage = null
  SevenImage = null
  EightImage = null
  NineImage = null
  one = "./assets/images/one.png"
  two = "./assets/images/two.png"

  playerOneTurn = true
  playerTwoTurn = false

  ngOnInit() {
    console.log("Inside game ts")
  }

  count = 0 
  winPlayerImage = null

  check(){
    this.count = this.count+1
    console.log(this.count)
    if(this.OneImage ==this.one && this.TwoImage==this.one && this.ThreeImage==this.one ){
          console.log("Someone Win")
          this.winPlayerImage = this.one
          this.gameOver = true
    }

    else if(this.OneImage ==this.two && this.TwoImage==this.two && this.ThreeImage==this.two){
        this.winPlayerImage = this.two
        this.gameOver = true
    }


    else if(this.FourImage == this.one &&  this.FiveImage ==this.one &&  this.SixImage== this.one){
      this.winPlayerImage = this.one
        this.gameOver = true
    }

    else if(this.FourImage == this.two &&  this.FiveImage ==this.two &&  this.SixImage== this.two){
      this.winPlayerImage = this.two
      this.gameOver = true
    }



    else if(this.SevenImage == this.one && this.EightImage ==this.one &&  this.NineImage==this.one  ){
      this.winPlayerImage = this.one
      this.gameOver = true
    }
    else if(this.SevenImage == this.two && this.EightImage ==this.two &&  this.NineImage==this.two){
      this.winPlayerImage = this.two
      this.gameOver = true
    }


    else if(this.OneImage == this.one && this.FiveImage == this.one && this.NineImage==this.one ){
      this.winPlayerImage = this.one
      this.gameOver = true
    }
    else if(this.OneImage == this.two && this.FiveImage == this.two && this.NineImage==this.two){
      this.winPlayerImage = this.two
      this.gameOver = true
    }



    else if(this.OneImage == this.one &&  this.FourImage ==this.one &&  this.SevenImage== this.one ){
      this.winPlayerImage = this.one
      this.gameOver = true
    }
    else if(this.OneImage == this.two &&  this.FourImage ==this.two &&  this.SevenImage== this.two){
      this.winPlayerImage = this.two
      this.gameOver = true
    }


    else if(this.TwoImage == this.one && this.FiveImage ==this.one &&  this.EightImage==this.one){
      this.winPlayerImage = this.one
      this.gameOver = true
    }
    else if(this.TwoImage == this.two && this.FiveImage ==this.two &&  this.EightImage==this.two ){
      this.winPlayerImage = this.two
      this.gameOver = true
    }


    else if(this.ThreeImage == this.one && this.SixImage == this.one && this.NineImage==this.one  ){
      this.winPlayerImage = this.one
      this.gameOver = true
    }
    else if(this.ThreeImage == this.two && this.SixImage == this.two && this.NineImage==this.two){
      this.winPlayerImage = this.two
      this.gameOver = true
    }


    else if(this.ThreeImage ==this.one &&  this.FiveImage ==this.one &&  this.SevenImage==this.one ){
      this.winPlayerImage = this.two
      this.gameOver = true
    }
    else if( this.ThreeImage ==this.two &&  this.FiveImage ==this.two &&  this.SevenImage==this.two ){
      this.winPlayerImage = this.two
      this.gameOver = true
    }


  }

  oneClick() {
    if (this.OneImage == null) {
      if (this.playerOneTurn)
        this.OneImage = this.one
      if (this.playerTwoTurn)
        this.OneImage = this.two
      this.playerOneTurn = !this.playerOneTurn
      this.playerTwoTurn = !this.playerTwoTurn
      this.check()
    }

    
  }

  twoClick() {
    if (this.TwoImage == null) {
      if (this.playerOneTurn)
        this.TwoImage = this.one
      if (this.playerTwoTurn)
        this.TwoImage = this.two

      this.playerOneTurn = !this.playerOneTurn
      this.playerTwoTurn = !this.playerTwoTurn
     
      this.check()
    }
  }

  threeClick() {
    if (this.ThreeImage == null) {
      if (this.playerOneTurn)
        this.ThreeImage = this.one
      if (this.playerTwoTurn)
        this.ThreeImage = this.two

      this.playerOneTurn = !this.playerOneTurn
      this.playerTwoTurn = !this.playerTwoTurn
     
      this.check()
    }
  }

  fourClick() {
    if (this.FourImage == null) {
      if (this.playerOneTurn)
        this.FourImage = this.one
      if (this.playerTwoTurn)
        this.FourImage = this.two

      this.playerOneTurn = !this.playerOneTurn
      this.playerTwoTurn = !this.playerTwoTurn
    
      this.check()
    }
  }

  fiveClick() {
    if (this.FiveImage == null) {
      if (this.playerOneTurn)
        this.FiveImage = this.one
      if (this.playerTwoTurn)
        this.FiveImage = this.two

      this.playerOneTurn = !this.playerOneTurn
      this.playerTwoTurn = !this.playerTwoTurn
     
      this.check()
    }
  }

  sixClick() {
    if (this.SixImage == null) {
      if (this.playerOneTurn)
        this.SixImage = this.one
      if (this.playerTwoTurn)
        this.SixImage = this.two

      this.playerOneTurn = !this.playerOneTurn
      this.playerTwoTurn = !this.playerTwoTurn
     
      this.check()
    }
  }

  sevenClick() {
    if (this.SevenImage == null) {
      if (this.playerOneTurn)
        this.SevenImage = this.one
      if (this.playerTwoTurn)
        this.SevenImage = this.two

      this.playerOneTurn = !this.playerOneTurn
      this.playerTwoTurn = !this.playerTwoTurn
    
      this.check()
    }
  }

  eightClick() {
    if (this.EightImage == null) {
      if (this.playerOneTurn)
        this.EightImage = this.one
      if (this.playerTwoTurn)
        this.EightImage = this.two

      this.playerOneTurn = !this.playerOneTurn
      this.playerTwoTurn = !this.playerTwoTurn
     
      this.check()
    }
  }

  nineClick() {
    if (this.NineImage == null) {
      if (this.playerOneTurn)
        this.NineImage = this.one
      if (this.playerTwoTurn)
        this.NineImage = this.two

      this.playerOneTurn = !this.playerOneTurn
      this.playerTwoTurn = !this.playerTwoTurn
     
      this.check()
    }
  }

}
