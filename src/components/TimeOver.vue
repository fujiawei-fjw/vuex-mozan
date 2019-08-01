<template>
  <div class="timeOver">
    <div>
      <span>{{days>9?days:'0'+days}}</span>
      <span>天</span>
    </div>
    <span>:</span>
    <div>
      <span>{{hours>9?hours:'0'+hours}}</span>
      <span>时</span>
    </div>
    <span>:</span>
    <div>
      <span>{{minutes>9?minutes:'0'+minutes}}</span>
      <span>分</span>
    </div>
    <span>:</span>
    <div>
      <span>{{seconds>9?seconds:'0'+seconds}}</span>
      <span>秒</span>
    </div>
  </div>
</template>
 
<script>
import moment from "moment";
export default {
  name: "timeOver",
  data() {
    return {
      days: null,
      hours: null,
      minutes: null,
      seconds: null
    };
  },
  created() {
    // setInterval(() => {
    const start_date = moment().format("YYYY-MM-DD HH:mm:ss");
    const end_date = moment("2019-10-01 00:00:00", "YYYY-MM-DD HH:mm:ss");

    this.days = end_date.diff(start_date, "day");
    this.hours = end_date.diff(start_date, "hours") - this.days * 24;
    this.minutes =
      end_date.diff(start_date, "minutes") -
      this.days * 24 * 60 -
      this.hours * 60;
    this.seconds =
      end_date.diff(start_date, "seconds") -
      this.days * 24 * 60 * 60 -
      this.hours * 60 * 60 -
      this.minutes * 60;
    // }, 800);
  }
};
</script>

<style>
.timeOver {
  text-align: center;
  display: flex;
  width: 400px;
  justify-content: space-between;
  background-color: #707378;
  border-radius: 10px;
  padding: 10px 20px;
}
.timeOver > div {
  text-align: center;
}

.timeOver > div > span:first-child,
.timeOver > span {
  display: block;
  font-size: 23px;
}
.timeOver > span {
  padding-top: 10px;
}
.timeOver span {
  color: rgba(248, 248, 58, 0.938);
}
</style>