<template>
  <nav class="pgn">
    <ul>
      <li>
        <a class="pgn__prev" href="#0">Prev</a>
      </li>
      <li>
        <a class="pgn__num" href="#0">1</a>
      </li>
      <li>
        <span class="pgn__num current">2</span>
      </li>
      <li>
        <a class="pgn__num" href="#0">3</a>
      </li>
      <li>
        <a class="pgn__num" href="#0">4</a>
      </li>
      <li>
        <a class="pgn__num" href="#0">5</a>
      </li>
      <li>
        <span class="pgn__num dots">…</span>
      </li>
      <li>
        <a class="pgn__num" href="#0">8</a>
      </li>
      <li>
        <a class="pgn__next" href="#0">Next</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "sunPage"
};
</script>


<style lang="less" scoped>
.pgn {
  margin: 3.2rem auto 3.2rem;
  text-align: center;
  ul {
    display: inline-block;
    list-style: none;
    margin-left: 0;
    position: relative;
    padding: 0 6rem;
    li {
      display: inline-block;
      margin: 0;
      padding: 0;
      .current,
      .current:hover {
        background-color: #000000;
        color: white;
      }
      .inactive,
      .inactive:hover {
        opacity: 0.4;
        cursor: default;
      }
      .pgn__num {
        font-family: "IBM Plex Sans", sans-serif;
        font-weight: 700;
        font-size: 1.7rem;
        line-height: 3.2rem;
        display: inline-block;
        padding: 0.2rem 1.2rem;
        height: 3.6rem;
        margin: 0.2rem 0.2rem;
        transition: all, 0.3s, ease-in-out;
        &:hover {
          background: #d3d3d3;
          color: #000000;
        }
      }
      .pgn__prev,
      .pgn__next {
        display: block;
        background-repeat: no-repeat;
        background-size: 18px 9px;
        background-position: center;
        height: 3.6rem;
        line-height: 3.6rem;
        width: 4.8rem;
        padding: 0;
        margin: 0;
        opacity: 1;
        text-shadow: none;
        color: transparent;
        transition: all, 0.2s, ease-in-out;
        position: absolute;
        top: 50%;
        transform: translate3d(0, -50%, 0);
        color: #000;
        font-size: 1.8rem;
        font-weight: 600;
        &:hover {
          background-color: #d3d3d3;
        }
        &.inactive {
          opacity: 0.4;
          cursor: default;
          &:hover {
            background-color: transparent;
          }
        }
      }
      .pgn__prev {
        left: 0;
      }
      .pgn__next {
        right: 0;
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .pgn ul {
    padding: 0 5.2rem;
  }
}
</style>
