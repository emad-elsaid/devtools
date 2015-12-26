export default function(){
  this.transition(
    this.hasClass('toleft'),
    this.use('toLeft')
  );
}
