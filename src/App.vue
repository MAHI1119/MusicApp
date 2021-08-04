<template>
  <div id="app">
    <VueScrollFixedNavbar>
      <header class="sticky-top">
        <img
          src="./assets/logo7.jpeg"
          class="logo"
          width="55px"
          height="55px"
        />
        <h1>Sound<span class="party">Party</span></h1>
        <span class="log">Login</span>
      </header>
    </VueScrollFixedNavbar>
    <content>
      <section class="player">
        <center>
          <img
            src="./assets/imge2.jpg"
            width="300px"
            height="350px"
            class="image"
          />
        </center>
        <h2 class="title">
          {{ current.movie }} - <span>{{ current.Song }}</span>
        </h2>
        <div class="controls">
          <button class="prev" @click="prev">Prev</button>
          <button class="play" v-if="!isPlaying" @click="play">Play</button>
          <button class="pause" v-else @click="pause">Pause</button>
          <button class="next" @click="next">Next</button>
        </div>
      </section>

      <container class="playlist">
        <h3>
          The Playlist
        </h3>

        <span
          v-for="song in songs"
          :key="song.src"
          @click="play(song)"
          :class="song.src == current.src ? 'song playing' : 'song'"
        >
          {{ song.movie }} - {{ song.Song }}
          <img
            src="./assets/start2.png"
            width="30px"
            height="30px"
            class="start"
          />
        </span>
      </container>
    </content>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      current: {},
      index: 0,
      isPlaying: false,
      songs: [
        {
          movie: "Teddy",
          Song: "iniya thanimayey",

          src: require("./assets/teddy.mp3"),
        },
        {
          movie: "Teddy",
          Song: "Marandaaye",

          src: require("./assets/marandaayey.mp3"),
        },
        {
          movie: "Master",
          Song: " Kutty Story",

          src: require("./assets/kutty story.mp3"),
        },
        {
          movie: "Karnan",
          Song: " Kandaa Vara",

          src: require("./assets/Kandaa Vara.mp3"),
        },
        {
          movie: "Album",
          Song: "Shap of you ",

          src: require("./assets/SHAPE OF YOU.mp3"),
        },
        {
          movie: "Premam",
          Song: "Malare ninne",

          src: require("./assets/Malare-Ninne.mp3"),
        },
        {
          movie: "Sultan",
          Song: "Yaaraiyum Ivlo",

          src: require("./assets/Yaaraiyum Ivlo Azhaga.mp3"),
        },
      ],
      player: new Audio(),
    };
  },
  methods: {
    play(song) {
      if (typeof song.src != "undefined") {
        this.current = song;
        this.player.src = this.current.src;
      }
      this.player.play();
      this.player.addEventListener(
        "ended",
        function() {
          this.index++;
          if (this.index > this.songs.length - 1) {
            this.index = 0;
          }
          this.current = this.songs[this.index];
          this.play(this.current);
        }.bind(this)
      );
      this.isPlaying = true;
    },
    pause() {
      this.player.pause();
      this.isPlaying = false;
    },
    next() {
      this.index++;
      if (this.index > this.songs.length - 1) {
        this.index = 0;
      }
      this.current = this.songs[this.index];
      this.play(this.current);
    },
    prev() {
      this.index--;
      if (this.index < 0) {
        this.index = this.songs.length - 1;
      }
      this.current = this.songs[this.index];
      this.play(this.current);
    },
  },
  created() {
    this.current = this.songs[this.index];
    this.player.src = this.current.src;
  },
};
</script>

<style></style>
