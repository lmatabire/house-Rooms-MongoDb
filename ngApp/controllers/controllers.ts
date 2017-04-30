namespace onetomany.Controllers {

    export class HomeController {
        public houses;

        constructor(private $http: ng.IHttpService){
          this.$http.get('/api/houses')
            .then((response)=>{
              this.houses = response.data;
            })
        }
    }


    export class AboutController {
        public message = 'Hello from the about page!';
    }

    export class AddHouseController {
      public house;
      public room;

      public addHouse(){
        this.$http.post('/api/houses', this.house)
          .then((response)=>{
            this.$state.go('home');
          });
      }

      public addRoomToHouse(){
        let newRoom = {name: '', area: 0};
        newRoom.name = this.room.name;
        newRoom.area = this.room.area;
        this.house.rooms.unshift(newRoom);
        this.room.name = '';
        this.room.area = '';
      }

      constructor(private $http: ng.IHttpService,
                  private $state: ng.ui.IStateService){
          this.house = {};
          this.house.rooms = [];
      }
    }

}
