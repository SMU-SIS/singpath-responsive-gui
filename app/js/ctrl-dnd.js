function dndCtrl($scope) {

    $scope.model = [
        {
            "id": 2,
            "value": "Java"
        },
        {
            "id": 1,
            "value": "Phython"
        },
        {
            "id": 3,
            "value": "JavaScript"
        },
        {
            "id": 4,
            "value": "HTML5"
        },
        {
            "id": 5,
            "value": "CSS"
        }
    ];

    $scope.source = [
        {
            "id": 6,
            "value": "Ruby"
        }
    ];

    $scope.sourceEmpty = function() {
        return $scope.source.length == 0;
    }

    $scope.modelEmpty = function() {
        return $scope.model.length == 0;
    }

    $(document).ready(function(){
        $('#startVideo').modal('show');
    });

    var havePlayed = false;
    $scope.validate = function() {
        if($scope.model[0].id == 1 && $scope.model[1].id == 2 && $scope.model[2].id == 3 && havePlayed == false){
            havePlayed = true;
            window.alert("Good Job! We will go to 2nd question");
            window.location = "#question2";
        }
    }

}

function dndCtrlq2($scope) {

    $scope.model = [
        {
            "id": 1,
            "value": "for a good reason" 
        },
        {
            "id": 2,
            "value": "coding hard"
        },
        {
            "id": 3,
            "value": "is it correct?"
        },
        {
            "id": 4,
            "value": "or wrong?"
        },
    ];

    $scope.source = [
        {
            "id": 1,
            "value": "for a good reason" 
        },
        {
            "id": 2,
            "value": "coding hard"
        },
        {
            "id": 3,
            "value": "is it correct?"
        },
        {
            "id": 4,
            "value": "or wrong?"
        },
    ];

    $scope.modelEmpty = function() {
        return $scope.model.length == 0;
    }

    var havePlayed = false;
    $scope.validate = function() {
        if($scope.model[0].id == 2 && $scope.model[1].id == 1 && $scope.model[2].id == 3 && havePlayed == false){
            havePlayed = true;
            window.alert("Good Job! We will go to 3rd question");
            window.location = "#question3";
        }
    }

}

function dndCtrlq3($scope) {

    $scope.model = [
        {
            "id": 2,
            "value": "Year 2"
        },
        {
            "id": 1,
            "value": "Year 1"
        },
        {
            "id": 3,
            "value": "Year 3"
        },
        {
            "id": 4,
            "value": "Year 4"
        },
    ];

    $scope.source = [
        {
            "id": 2,
            "value": "NTU"
        },
            {
            "id": 1,
            "value": "SMU"
        },
        {
            "id": 3,
            "value": "NUS"
        },
        {
            "id": 4,
            "value": "SUTD"
        },
    ];

    $scope.sourceEmpty = function() {
        return $scope.source.length == 0;
    }

    $scope.modelEmpty = function() {
        return $scope.model.length == 0;
    }

    var havePlayed = false;
    $scope.validate = function() {
        if($scope.model[0].id == 1 && $scope.model[1].id == 2 && $scope.model[2].id == 3 && $scope.source[0].id == 1 && $scope.source[1].id == 2 && $scope.source[2].id == 3 && havePlayed == false){
            havePlayed = true;
            window.alert("Good Job! We will go to 4th question");
            window.location = "#question4";
        }
    }

}

function dndCtrlq4($scope) {

    $scope.model = [
        {
            "id": 2,
            "value": "x=2"
        },
        {
            "id": 1,
            "value": "x=1"
        },
        {
            "id": 3,
            "value": "x=3"
        },
        {
            "id": 4,
            "value": "x=4"
        },
    ];

    $scope.source = [
        {
            "id": 1,
            "value": "y=1"
        },
            {
            "id": 2,
            "value": "y=2"
        },
        {
            "id": 3,
            "value": "y=3"
        },
        {
            "id": 4,
            "value": "y=4"
        },
    ];

    $scope.sourceEmpty = function() {
        return $scope.source.length == 0;
    }

    $scope.modelEmpty = function() {
        return $scope.model.length == 0;
    }

    var havePlayed = false;
    $scope.validate = function() {
        if($scope.model[0].id == 1 && $scope.model[1].id == 2 && $scope.model[2].id == 3 && havePlayed == false){
            havePlayed = true;
            window.alert("Good Job! We will go to 5th question");
            window.location = "#question5";
        }
    }

}

function dndCtrlq5($scope) {

    $scope.model = [
        {
            "id": 1,
            "value": "Monday"
        },
        {
            "id": 3,
            "value": "Wednesday"
        },
        {
            "id": 5,
            "value": "Friday"
        },
        {
            "id": 6,
            "value": "x=1"
        },
    ];

    $scope.source = [
        {
            "id": 2,
            "value": "Tuesday"
        },
            {
            "id": 4,
            "value": "Thursday"
        },
        {
            "id": 7,
            "value": "x=2"
        },
    ];

    $scope.sourceEmpty = function() {
        return $scope.source.length == 0;
    }

    $scope.modelEmpty = function() {
        return $scope.model.length == 0;
    }

    var havePlayed = false;
    $scope.validate = function() {
        if($scope.model[0].id == 1 && $scope.model[1].id == 2 && $scope.model[2].id == 3 && $scope.source[0].id == 6 && $scope.source[1].id == 7 && havePlayed == false){
            havePlayed = true;
            $(document).ready(function(){
                $('#endVideo').modal('show');
            });
        }
    }

}