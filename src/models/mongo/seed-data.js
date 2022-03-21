export const seedData = {
    users: {
      _model: "User",
      homer: {
        firstName: "Homer",
        lastName: "Simpson",
        email: "homer@simpson.com",
        password: "secret"
      },
      marge: {
        firstName: "Placemark",
        lastName: "Admin",
        email: "admin@placemark.ie",
        password: "hello"
      },
      bart: {
        firstName: "Bart",
        lastName: "Simpson",
        email: "bart@simpson.com",
        password: "secret"
      }
    },
    crags: {
      _model: "Crag",
      dunsheen: {
        title: "Dunsheen Head",
        lat: 15,
        lng: -6,
        approach: "Park at Lat/Lng and follow path to sea cliffs.  Abseil from huge boulder",
        userid: "->users.bart"
      },
      owey: {
        title: "Owey Island",
        lat: 53,
        lng: -8.01,
        approach: "Boat from Donegal",
        userid: "->users.bart"
      },
      inismor: {
        title: "Inis Mor",
        lat: 55,
        lng: -6,
        approach: "Boat from Doolin, camping at opposite of island",
        userid: "->users.homer"
      }
    },
    routes: {
      _model : "Route",
      giraffe : {
        name: "Giraffe",
        grade: "VS",
        height: 25,
        firstascent: "Michael Duffy",
        description: "Sketchy first few moves",
        cragid: "->crags.dunsheen"
      },
      nutella : {
        name: "Nutella",
        grade: "HS",
        height: 24,
        firstascent: "Michael Duffy",
        description: "Bomber gear all the way",
        cragid: "->crags.dunsheen"
      },
      needle : {
        name: "The Needle",
        grade: "HVS",
        height: 15,
        firstascent: "Vicki Cleary",
        description: "No gear",
        cragid: "->crags.dunsheen"
      },
      kleptomaniac : {
        name: "Kleptomaniac",
        grade: "VS",
        height: 25,
        firstascent: "Michael Duffy",
        description: "Sketchy first few moves",
        cragid: "->crags.inismor"
      },
      sarcophagas : {
        name: "Sarcophagas",
        grade: "HS",
        height: 24,
        firstascent: "Michael Duffy",
        description: "Bomber gear all the way",
        cragid: "->crags.inismor"
      },
      sunsetglory : {
        name: "Sunset Glory",
        grade: "HVS",
        height: 15,
        firstascent: "Vicki Cleary",
        description: "No gear",
        cragid: "->crags.owey"
      },
    }
  };