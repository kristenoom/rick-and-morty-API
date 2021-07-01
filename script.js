let baseURL = `https://rickandmortyapi.com/api/`

function characterData1() {
    fetch(baseURL + 'character/')
        .then((response) => response.json())
        .then((json) => displayChar1(json))
        .catch((error) => console.log(error))

    const displayChar1 = (json) => {
        let image0 = document.getElementById('image0').src = json.results[0].image;
        let character0 = document.getElementById('character0Name').innerText = json.results[0].name;
        let characterStatus0 = document.getElementById('character0Text').innerHTML = `<strong>Status:</strong> ` + json.results[0].status + `<br><strong>Species:</strong> ` + json.results[0].species + `<br><strong>Gender:</strong> ` + json.results[0].gender + `<br><strong>Origin:</strong> ` + json.results[0].origin.name + `<br><strong>Current Location:</strong> ` + json.results[0].location.name;
        let ModalTitle0 = document.getElementById('modalTitle0').innerText = json.results[0].name;

        let image1 = document.getElementById('image1').src = json.results[1].image;
        let character1 = document.getElementById('character1Name').innerText = json.results[1].name;
        let characterStatus1 = document.getElementById('character1Text').innerHTML = `<strong>Status:</strong> ` + json.results[1].status + `<br><strong>Species:</strong> ` + json.results[1].species + `<br><strong>Gender:</strong> ` + json.results[1].gender + `<br><strong>Origin:</strong> ` + json.results[1].origin.name + `<br><strong>Current Location:</strong> ` + json.results[1].location.name;
        let ModalTitle1 = document.getElementById('modalTitle1').innerText = json.results[1].name;
    
        let image2 = document.getElementById('image2').src = json.results[2].image;
        let character2 = document.getElementById('character2Name').innerText = json.results[2].name;
        let characterStatus2 = document.getElementById('character2Text').innerHTML = `<strong>Status:</strong> ` + json.results[2].status + `<br><strong>Species:</strong> ` + json.results[2].species + `<br><strong>Gender:</strong> ` + json.results[2].gender + `<br><strong>Origin:</strong> ` + json.results[2].origin.name + `<br><strong>Current Location:</strong> ` + json.results[2].location.name;
        let ModalTitle2 = document.getElementById('modalTitle2').innerText = json.results[2].name;

        //DISPLAY BETH
        let image3 = document.getElementById('image3').src = json.results[3].image;
        let character3 = document.getElementById('character3Name').innerText = json.results[3].name;
        let characterStatus3 = document.getElementById('character3Text').innerHTML = `<strong>Status:</strong> ` + json.results[3].status + `<br><strong>Species:</strong> ` + json.results[3].species + `<br><strong>Gender:</strong> ` + json.results[3].gender + `<br><strong>Origin:</strong> ` + json.results[3].origin.name + `<br><strong>Current Location:</strong> ` + json.results[3].location.name;
        let ModalTitle3 = document.getElementById('modalTitle3').innerText = json.results[3].name;

        //DISPLAY JERRY
        let image4 = document.getElementById('image4').src = json.results[4].image;
        let character4 = document.getElementById('character4Name').innerText = json.results[4].name;
        let characterStatus4 = document.getElementById('character4Text').innerHTML = `<strong>Status:</strong> ` + json.results[4].status + `<br><strong>Species:</strong> ` + json.results[4].species + `<br><strong>Gender:</strong> ` + json.results[4].gender + `<br><strong>Origin:</strong> ` + json.results[4].origin.name + `<br><strong>Current Location:</strong> ` + json.results[4].location.name;
        let ModalTitle4 = document.getElementById('modalTitle4').innerText = json.results[4].name;

        let image5 = document.getElementById('image5').src = json.results[5].image;
        let character5 = document.getElementById('character5Name').innerText = json.results[5].name;
        let characterStatus5 = document.getElementById('character5Text').innerHTML = `<strong>Status:</strong> ` + json.results[5].status + `<br><strong>Species:</strong> ` + json.results[5].species + `<br><strong>Gender:</strong> ` + json.results[5].gender + `<br><strong>Origin:</strong> ` + json.results[5].origin.name + `<br><strong>Current Location:</strong> ` + json.results[5].location.name;

        let image6 = document.getElementById('image6').src = json.results[6].image;
        let character6 = document.getElementById('character6Name').innerText = json.results[6].name;
        let characterStatus6 = document.getElementById('character6Text').innerHTML = `<strong>Status:</strong> ` + json.results[6].status + `<br><strong>Species:</strong> ` + json.results[6].species + `<br><strong>Gender:</strong> ` + json.results[6].gender + `<br><strong>Origin:</strong> ` + json.results[6].origin.name + `<br><strong>Current Location:</strong> ` + json.results[6].location.name;

        let image7 = document.getElementById('image7').src = json.results[7].image;
        let character7 = document.getElementById('character7Name').innerText = json.results[7].name;
        let characterStatus7 = document.getElementById('character7Text').innerHTML = `<strong>Status:</strong> ` + json.results[7].status + `<br><strong>Species:</strong> ` + json.results[7].species + `<br><strong>Gender:</strong> ` + json.results[7].gender + `<br><strong>Origin:</strong> ` + json.results[7].origin.name + `<br><strong>Current Location:</strong> ` + json.results[7].location.name;

        let image8 = document.getElementById('image8').src = json.results[8].image;
        let character8 = document.getElementById('character8Name').innerText = json.results[8].name;
        let characterStatus8 = document.getElementById('character8Text').innerHTML = `<strong>Status:</strong> ` + json.results[8].status + `<br><strong>Species:</strong> ` + json.results[8].species + `<br><strong>Gender:</strong> ` + json.results[8].gender + `<br><strong>Origin:</strong> ` + json.results[8].origin.name + `<br><strong>Current Location:</strong> ` + json.results[8].location.name;

        let image9 = document.getElementById('image9').src = json.results[9].image;
        let character9 = document.getElementById('character9Name').innerText = json.results[9].name;
        let characterStatus9 = document.getElementById('character9Text').innerHTML = `<strong>Status:</strong> ` + json.results[9].status + `<br><strong>Species:</strong> ` + json.results[9].species + `<br><strong>Gender:</strong> ` + json.results[9].gender + `<br><strong>Origin:</strong> ` + json.results[9].origin.name + `<br><strong>Current Location:</strong> ` + json.results[9].location.name;

        let image10 = document.getElementById('image10').src = json.results[10].image;
        let character10 = document.getElementById('character10Name').innerText = json.results[10].name;
        let characterStatus10 = document.getElementById('character10Text').innerHTML = `<strong>Status:</strong> ` + json.results[10].status + `<br><strong>Species:</strong> ` + json.results[10].species + `<br><strong>Gender:</strong> ` + json.results[10].gender + `<br><strong>Origin:</strong> ` + json.results[10].origin.name + `<br><strong>Current Location:</strong> ` + json.results[10].location.name;

        let image11 = document.getElementById('image11').src = json.results[11].image;
        let character11 = document.getElementById('character11Name').innerText = json.results[11].name;
        let characterStatus11 = document.getElementById('character11Text').innerHTML = `<strong>Status:</strong> ` + json.results[11].status + `<br><strong>Species:</strong> ` + json.results[11].species + `<br><strong>Gender:</strong> ` + json.results[11].gender + `<br><strong>Origin:</strong> ` + json.results[11].origin.name + `<br><strong>Current Location:</strong> ` + json.results[11].location.name;
    
        let image12 = document.getElementById('image12').src = json.results[12].image;
        let character12 = document.getElementById('character12Name').innerText = json.results[12].name;
        let characterStatus12 = document.getElementById('character12Text').innerHTML = `<strong>Status:</strong> ` + json.results[12].status + `<br><strong>Species:</strong> ` + json.results[12].species + `<br><strong>Gender:</strong> ` + json.results[12].gender + `<br><strong>Origin:</strong> ` + json.results[12].origin.name + `<br><strong>Current Location:</strong> ` + json.results[12].location.name;

        let image13 = document.getElementById('image13').src = json.results[13].image;
        let character13 = document.getElementById('character13Name').innerText = json.results[13].name;
        let characterStatus13 = document.getElementById('character13Text').innerHTML = `<strong>Status:</strong> ` + json.results[13].status + `<br><strong>Species:</strong> ` + json.results[13].species + `<br><strong>Gender:</strong> ` + json.results[13].gender + `<br><strong>Origin:</strong> ` + json.results[13].origin.name + `<br><strong>Current Location:</strong> ` + json.results[13].location.name;

        let image14 = document.getElementById('image14').src = json.results[14].image;
        let character14 = document.getElementById('character14Name').innerText = json.results[14].name;
        let characterStatus14 = document.getElementById('character14Text').innerHTML = `<strong>Status:</strong> ` + json.results[14].status + `<br><strong>Species:</strong> ` + json.results[14].species + `<br><strong>Gender:</strong> ` + json.results[14].gender + `<br><strong>Origin:</strong> ` + json.results[14].origin.name + `<br><strong>Current Location:</strong> ` + json.results[14].location.name;

        let image15 = document.getElementById('image15').src = json.results[15].image;
        let character15 = document.getElementById('character15Name').innerText = json.results[15].name;
        let characterStatus15 = document.getElementById('character15Text').innerHTML = `<strong>Status:</strong> ` + json.results[15].status + `<br><strong>Species:</strong> ` + json.results[15].species + `<br><strong>Gender:</strong> ` + json.results[15].gender + `<br><strong>Origin:</strong> ` + json.results[15].origin.name + `<br><strong>Current Location:</strong> ` + json.results[15].location.name;

        let image16 = document.getElementById('image16').src = json.results[16].image;
        let character16 = document.getElementById('character16Name').innerText = json.results[16].name;
        let characterStatus16 = document.getElementById('character16Text').innerHTML = `<strong>Status:</strong> ` + json.results[16].status + `<br><strong>Species:</strong> ` + json.results[16].species + `<br><strong>Gender:</strong> ` + json.results[16].gender + `<br><strong>Origin:</strong> ` + json.results[16].origin.name + `<br><strong>Current Location:</strong> ` + json.results[16].location.name;

        let image17 = document.getElementById('image17').src = json.results[17].image;
        let character17 = document.getElementById('character17Name').innerText = json.results[17].name;
        let characterStatus17 = document.getElementById('character17Text').innerHTML = `<strong>Status:</strong> ` + json.results[17].status + `<br><strong>Species:</strong> ` + json.results[17].species + `<br><strong>Gender:</strong> ` + json.results[17].gender + `<br><strong>Origin:</strong> ` + json.results[17].origin.name + `<br><strong>Current Location:</strong> ` + json.results[17].location.name;

        let image18 = document.getElementById('image18').src = json.results[18].image;
        let character18 = document.getElementById('character18Name').innerText = json.results[18].name;
        let characterStatus18 = document.getElementById('character18Text').innerHTML = `<strong>Status:</strong> ` + json.results[18].status + `<br><strong>Species:</strong> ` + json.results[18].species + `<br><strong>Gender:</strong> ` + json.results[18].gender + `<br><strong>Origin:</strong> ` + json.results[18].origin.name + `<br><strong>Current Location:</strong> ` + json.results[18].location.name;

        let image19 = document.getElementById('image19').src = json.results[19].image;
        let character19 = document.getElementById('character19Name').innerText = json.results[19].name;
        let characterStatus19 = document.getElementById('character19Text').innerHTML = `<strong>Status:</strong> ` + json.results[19].status + `<br><strong>Species:</strong> ` + json.results[19].species + `<br><strong>Gender:</strong> ` + json.results[19].gender + `<br><strong>Origin:</strong> ` + json.results[19].origin.name + `<br><strong>Current Location:</strong> ` + json.results[19].location.name;
    }
}

function characterData2() {
        fetch(baseURL + 'character/?page=2')
        .then((response) => response.json())
        .then((json) => displayChar2(json))
        .catch((error) => console.log(error))

    const displayChar2 = (json) => {
        let image20 = document.getElementById('image20').src = json.results[0].image;
        let character20 = document.getElementById('character20Name').innerText = json.results[0].name;
        let characterStatus20 = document.getElementById('character20Text').innerHTML = `<strong>Status:</strong> ` + json.results[0].status + `<br><strong>Species:</strong> ` + json.results[0].species + `<br><strong>Gender:</strong> ` + json.results[0].gender + `<br><strong>Origin:</strong> ` + json.results[0].origin.name + `<br><strong>Current Location:</strong> ` + json.results[0].location.name;

        let image21 = document.getElementById('image21').src = json.results[1].image;
        let character21 = document.getElementById('character21Name').innerText = json.results[1].name;
        let characterStatus21 = document.getElementById('character21Text').innerHTML = `<strong>Status:</strong> ` + json.results[1].status + `<br><strong>Species:</strong> ` + json.results[1].species + `<br><strong>Gender:</strong> ` + json.results[1].gender + `<br><strong>Origin:</strong> ` + json.results[1].origin.name + `<br><strong>Current Location:</strong> ` + json.results[1].location.name;

        let image22 = document.getElementById('image22').src = json.results[2].image;
        let character22 = document.getElementById('character22Name').innerText = json.results[2].name;
        let characterStatus22 = document.getElementById('character22Text').innerHTML = `<strong>Status:</strong> ` + json.results[2].status + `<br><strong>Species:</strong> ` + json.results[2].species + `<br><strong>Gender:</strong> ` + json.results[2].gender + `<br><strong>Origin:</strong> ` + json.results[2].origin.name + `<br><strong>Current Location:</strong> ` + json.results[2].location.name;

        let image23 = document.getElementById('image23').src = json.results[3].image;
        let character23 = document.getElementById('character23Name').innerText = json.results[3].name;
        let characterStatus23 = document.getElementById('character23Text').innerHTML = `<strong>Status:</strong> ` + json.results[3].status + `<br><strong>Species:</strong> ` + json.results[3].species + `<br><strong>Gender:</strong> ` + json.results[3].gender + `<br><strong>Origin:</strong> ` + json.results[3].origin.name + `<br><strong>Current Location:</strong> ` + json.results[3].location.name;

        let image24 = document.getElementById('image24').src = json.results[4].image;
        let character24 = document.getElementById('character24Name').innerText = json.results[4].name;
        let characterStatus24 = document.getElementById('character24Text').innerHTML = `<strong>Status:</strong> ` + json.results[4].status + `<br><strong>Species:</strong> ` + json.results[4].species + `<br><strong>Gender:</strong> ` + json.results[4].gender + `<br><strong>Origin:</strong> ` + json.results[4].origin.name + `<br><strong>Current Location:</strong> ` + json.results[4].location.name;

        let image25 = document.getElementById('image25').src = json.results[5].image;
        let character25 = document.getElementById('character25Name').innerText = json.results[5].name;
        let characterStatus25 = document.getElementById('character25Text').innerHTML = `<strong>Status:</strong> ` + json.results[5].status + `<br><strong>Species:</strong> ` + json.results[5].species + `<br><strong>Gender:</strong> ` + json.results[5].gender + `<br><strong>Origin:</strong> ` + json.results[5].origin.name + `<br><strong>Current Location:</strong> ` + json.results[5].location.name;

        let image26 = document.getElementById('image26').src = json.results[6].image;
        let character26 = document.getElementById('character26Name').innerText = json.results[6].name;
        let characterStatus26 = document.getElementById('character26Text').innerHTML = `<strong>Status:</strong> ` + json.results[6].status + `<br><strong>Species:</strong> ` + json.results[6].species + `<br><strong>Gender:</strong> ` + json.results[6].gender + `<br><strong>Origin:</strong> ` + json.results[6].origin.name + `<br><strong>Current Location:</strong> ` + json.results[6].location.name;

        let image27 = document.getElementById('image27').src = json.results[7].image;
        let character27 = document.getElementById('character27Name').innerText = json.results[7].name;
        let characterStatus27 = document.getElementById('character27Text').innerHTML = `<strong>Status:</strong> ` + json.results[7].status + `<br><strong>Species:</strong> ` + json.results[7].species + `<br><strong>Gender:</strong> ` + json.results[7].gender + `<br><strong>Origin:</strong> ` + json.results[7].origin.name + `<br><strong>Current Location:</strong> ` + json.results[7].location.name;

        let image28 = document.getElementById('image28').src = json.results[8].image;
        let character28 = document.getElementById('character28Name').innerText = json.results[8].name;
        let characterStatus28 = document.getElementById('character28Text').innerHTML = `<strong>Status:</strong> ` + json.results[8].status + `<br><strong>Species:</strong> ` + json.results[8].species + `<br><strong>Gender:</strong> ` + json.results[8].gender + `<br><strong>Origin:</strong> ` + json.results[8].origin.name + `<br><strong>Current Location:</strong> ` + json.results[8].location.name;

        let image29 = document.getElementById('image29').src = json.results[9].image;
        let character29 = document.getElementById('character29Name').innerText = json.results[9].name;
        let characterStatus29 = document.getElementById('character29Text').innerHTML = `<strong>Status:</strong> ` + json.results[9].status + `<br><strong>Species:</strong> ` + json.results[9].species + `<br><strong>Gender:</strong> ` + json.results[9].gender + `<br><strong>Origin:</strong> ` + json.results[9].origin.name + `<br><strong>Current Location:</strong> ` + json.results[9].location.name;
    }
}

function episodeData() {
    fetch(baseURL + 'episode/')
        .then((response) => response.json())
        .then((json) => displayEpisode(json))
        .catch((error) => console.log(error))

    const displayEpisode = (json) => {
        let ModalBody0 = document.getElementById('modalBody0').innerHTML = `<p><strong>First Appearance:</strong> ` + json.results[0].episode + ` - ` + json.results[0].name + `<br><strong>Air Date:</strong> ` + json.results[0].air_date + `</p>`;

        let ModalBody1 = document.getElementById('modalBody1').innerHTML = `<p><strong>First Appearance:</strong> ` + json.results[0].episode + ` - ` + json.results[0].name + `<br><strong>Air Date:</strong> ` + json.results[0].air_date + `</p>`;

        let ModalBody2 = document.getElementById('modalBody2').innerHTML = `<p><strong>First Appearance:</strong> ` + json.results[5].episode + ` - ` + json.results[5].name + `<br><strong>Air Date:</strong> ` + json.results[5].air_date + `</p>`;

        let ModalBody3 = document.getElementById('modalBody3').innerHTML = `<p><strong>First Appearance:</strong> ` + json.results[5].episode + ` - ` + json.results[5].name + `<br><strong>Air Date:</strong> ` + json.results[5].air_date + `</p>`;

        let ModalBody4 = document.getElementById('modalBody4').innerHTML = `<p><strong>First Appearance:</strong> ` + json.results[5].episode + ` - ` + json.results[5].name + `<br><strong>Air Date:</strong> ` + json.results[5].air_date + `</p>`;
    }
}

function episodeDataList1() {
    fetch(baseURL + 'episode/')
        .then((response) => response.json())
        .then((json) => displayEpisodeData(json))
        .catch((error) => console.log(error))

    const displayEpisodeData = (json) => {
        let episode01 = document.getElementById('episodeNum1').innerText = json.results[0].episode;
        let epName01 = document.getElementById('episodeName1').innerText = json.results[0].name;
        let epDate01 = document.getElementById('episodeDate1').innerText = json.results[0].air_date;

        let episode02 = document.getElementById('episodeNum2').innerText = json.results[1].episode;
        let epName02 = document.getElementById('episodeName2').innerText = json.results[1].name;
        let epDate02 = document.getElementById('episodeDate2').innerText = json.results[1].air_date;

        let episode03 = document.getElementById('episodeNum3').innerText = json.results[2].episode;
        let epName03 = document.getElementById('episodeName3').innerText = json.results[2].name;
        let epDate03 = document.getElementById('episodeDate3').innerText = json.results[2].air_date;

        let episode04 = document.getElementById('episodeNum4').innerText = json.results[3].episode;
        let epName04 = document.getElementById('episodeName4').innerText = json.results[3].name;
        let epDate04 = document.getElementById('episodeDate4').innerText = json.results[3].air_date;

        let episode05 = document.getElementById('episodeNum5').innerText = json.results[4].episode;
        let epName05 = document.getElementById('episodeName5').innerText = json.results[4].name;
        let epDate05 = document.getElementById('episodeDate5').innerText = json.results[4].air_date;

        let episode06 = document.getElementById('episodeNum6').innerText = json.results[5].episode;
        let epName06 = document.getElementById('episodeName6').innerText = json.results[5].name;
        let epDate06 = document.getElementById('episodeDate6').innerText = json.results[5].air_date;

        let episode07 = document.getElementById('episodeNum7').innerText = json.results[6].episode;
        let epName07 = document.getElementById('episodeName7').innerText = json.results[6].name;
        let epDate07 = document.getElementById('episodeDate7').innerText = json.results[6].air_date;

        let episode08 = document.getElementById('episodeNum8').innerText = json.results[7].episode;
        let epName08 = document.getElementById('episodeName8').innerText = json.results[7].name;
        let epDate08 = document.getElementById('episodeDate8').innerText = json.results[7].air_date;

        let episode09 = document.getElementById('episodeNum9').innerText = json.results[8].episode;
        let epName09 = document.getElementById('episodeName9').innerText = json.results[8].name;
        let epDate09 = document.getElementById('episodeDate9').innerText = json.results[8].air_date;

        let episode10 = document.getElementById('episodeNum10').innerText = json.results[9].episode;
        let epName10 = document.getElementById('episodeName10').innerText = json.results[9].name;
        let epDate10 = document.getElementById('episodeDate10').innerText = json.results[9].air_date;

        let episode11 = document.getElementById('episodeNum11').innerText = json.results[10].episode;
        let epName11 = document.getElementById('episodeName11').innerText = json.results[10].name;
        let epDate11 = document.getElementById('episodeDate11').innerText = json.results[10].air_date;
        /* SEASON 2 */
        let s2episode01 = document.getElementById('s2episodeNum1').innerText = json.results[11].episode;
        let s2epName01 = document.getElementById('s2episodeName1').innerText = json.results[11].name;
        let s2epDate01 = document.getElementById('s2episodeDate1').innerText = json.results[11].air_date;

        let s2episode02 = document.getElementById('s2episodeNum2').innerText = json.results[12].episode;
        let s2epName02 = document.getElementById('s2episodeName2').innerText = json.results[12].name;
        let s2epDate02 = document.getElementById('s2episodeDate2').innerText = json.results[12].air_date;

        let s2episode03 = document.getElementById('s2episodeNum3').innerText = json.results[13].episode;
        let s2epName03 = document.getElementById('s2episodeName3').innerText = json.results[13].name;
        let s2epDate03 = document.getElementById('s2episodeDate3').innerText = json.results[13].air_date;

        let s2episode04 = document.getElementById('s2episodeNum4').innerText = json.results[14].episode;
        let s2epName04 = document.getElementById('s2episodeName4').innerText = json.results[14].name;
        let s2epDate04 = document.getElementById('s2episodeDate4').innerText = json.results[14].air_date;

        let s2episode05 = document.getElementById('s2episodeNum5').innerText = json.results[15].episode;
        let s2epName05 = document.getElementById('s2episodeName5').innerText = json.results[15].name;
        let s2epDate05 = document.getElementById('s2episodeDate5').innerText = json.results[15].air_date;

        let s2episode06 = document.getElementById('s2episodeNum6').innerText = json.results[16].episode;
        let s2epName06 = document.getElementById('s2episodeName6').innerText = json.results[16].name;
        let s2epDate06 = document.getElementById('s2episodeDate6').innerText = json.results[16].air_date;

        let s2episode07 = document.getElementById('s2episodeNum7').innerText = json.results[17].episode;
        let s2epName07 = document.getElementById('s2episodeName7').innerText = json.results[17].name;
        let s2epDate07 = document.getElementById('s2episodeDate7').innerText = json.results[17].air_date;

        let s2episode08 = document.getElementById('s2episodeNum8').innerText = json.results[18].episode;
        let s2epName08 = document.getElementById('s2episodeName8').innerText = json.results[18].name;
        let s2epDate08 = document.getElementById('s2episodeDate8').innerText = json.results[18].air_date;

        let s2episode09 = document.getElementById('s2episodeNum9').innerText = json.results[19].episode;
        let s2epName09 = document.getElementById('s2episodeName9').innerText = json.results[19].name;
        let s2epDate09 = document.getElementById('s2episodeDate9').innerText = json.results[19].air_date;
    }
}

function episodeDataList2() {
    fetch(baseURL + 'episode/?page=2')
        .then((response) => response.json())
        .then((json) => displayEpisodeData(json))
        .catch((error) => console.log(error))

    const displayEpisodeData = (json) => {
        let s2episode10 = document.getElementById('s2episodeNum10').innerText = json.results[0].episode;
        let s2epName10 = document.getElementById('s2episodeName10').innerText = json.results[0].name;
        let s2epDate10 = document.getElementById('s2episodeDate10').innerText = json.results[0].air_date;
        
    /* SEASON 3 */
        let s3episode01 = document.getElementById('s3episodeNum1').innerText = json.results[1].episode;
        let s3epName01 = document.getElementById('s3episodeName1').innerText = json.results[1].name;
        let s3epDate01 = document.getElementById('s3episodeDate1').innerText = json.results[1].air_date;

        let s3episode02 = document.getElementById('s3episodeNum2').innerText = json.results[2].episode;
        let s3epName02 = document.getElementById('s3episodeName2').innerText = json.results[2].name;
        let s3epDate02 = document.getElementById('s3episodeDate2').innerText = json.results[2].air_date;

        let s3episode03 = document.getElementById('s3episodeNum3').innerText = json.results[3].episode;
        let s3epName03 = document.getElementById('s3episodeName3').innerText = json.results[3].name;
        let s3epDate03 = document.getElementById('s3episodeDate3').innerText = json.results[3].air_date;

        let s3episode04 = document.getElementById('s3episodeNum4').innerText = json.results[4].episode;
        let s3epName04 = document.getElementById('s3episodeName4').innerText = json.results[4].name;
        let s3epDate04 = document.getElementById('s3episodeDate4').innerText = json.results[4].air_date;

        let s3episode05 = document.getElementById('s3episodeNum5').innerText = json.results[5].episode;
        let s3epName05 = document.getElementById('s3episodeName5').innerText = json.results[5].name;
        let s3epDate05 = document.getElementById('s3episodeDate5').innerText = json.results[5].air_date;

        let s3episode06 = document.getElementById('s3episodeNum6').innerText = json.results[6].episode;
        let s3epName06 = document.getElementById('s3episodeName6').innerText = json.results[6].name;
        let s3epDate06 = document.getElementById('s3episodeDate6').innerText = json.results[6].air_date;

        let s3episode07 = document.getElementById('s3episodeNum7').innerText = json.results[7].episode;
        let s3epName07 = document.getElementById('s3episodeName7').innerText = json.results[7].name;
        let s3epDate07 = document.getElementById('s3episodeDate7').innerText = json.results[7].air_date;

        let s3episode08 = document.getElementById('s3episodeNum8').innerText = json.results[8].episode;
        let s3epName08 = document.getElementById('s3episodeName8').innerText = json.results[8].name;
        let s3epDate08 = document.getElementById('s3episodeDate8').innerText = json.results[8].air_date;

        let s3episode09 = document.getElementById('s3episodeNum9').innerText = json.results[9].episode;
        let s3epName09 = document.getElementById('s3episodeName9').innerText = json.results[9].name;
        let s3epDate09 = document.getElementById('s3episodeDate9').innerText = json.results[9].air_date;

        let s3episode10 = document.getElementById('s3episodeNum10').innerText = json.results[10].episode;
        let s3epName10 = document.getElementById('s3episodeName10').innerText = json.results[10].name;
        let s3epDate10 = document.getElementById('s3episodeDate10').innerText = json.results[10].air_date;
    /* SEASON 4 */
        let s4episode01 = document.getElementById('s4episodeNum1').innerText = json.results[11].episode;
        let s4epName01 = document.getElementById('s4episodeName1').innerText = json.results[11].name;
        let s4epDate01 = document.getElementById('s4episodeDate1').innerText = json.results[11].air_date;

        let s4episode02 = document.getElementById('s4episodeNum2').innerText = json.results[12].episode;
        let s4epName02 = document.getElementById('s4episodeName2').innerText = json.results[12].name;
        let s4epDate02 = document.getElementById('s4episodeDate2').innerText = json.results[12].air_date;

        let s4episode03 = document.getElementById('s4episodeNum3').innerText = json.results[13].episode;
        let s4epName03 = document.getElementById('s4episodeName3').innerText = json.results[13].name;
        let s4epDate03 = document.getElementById('s4episodeDate3').innerText = json.results[13].air_date;

        let s4episode04 = document.getElementById('s4episodeNum4').innerText = json.results[14].episode;
        let s4epName04 = document.getElementById('s4episodeName4').innerText = json.results[14].name;
        let s4epDate04 = document.getElementById('s4episodeDate4').innerText = json.results[14].air_date;

        let s4episode05 = document.getElementById('s4episodeNum5').innerText = json.results[15].episode;
        let s4epName05 = document.getElementById('s4episodeName5').innerText = json.results[15].name;
        let s4epDate05 = document.getElementById('s4episodeDate5').innerText = json.results[15].air_date;

        let s4episode06 = document.getElementById('s4episodeNum6').innerText = json.results[16].episode;
        let s4epName06 = document.getElementById('s4episodeName6').innerText = json.results[16].name;
        let s4epDate06 = document.getElementById('s4episodeDate6').innerText = json.results[16].air_date;

        let s4episode07 = document.getElementById('s4episodeNum7').innerText = json.results[17].episode;
        let s4epName07 = document.getElementById('s4episodeName7').innerText = json.results[17].name;
        let s4epDate07 = document.getElementById('s4episodeDate7').innerText = json.results[17].air_date;

        let s4episode08 = document.getElementById('s4episodeNum8').innerText = json.results[18].episode;
        let s4epName08 = document.getElementById('s4episodeName8').innerText = json.results[18].name;
        let s4epDate08 = document.getElementById('s4episodeDate8').innerText = json.results[18].air_date;

        let s4episode09 = document.getElementById('s4episodeNum9').innerText = json.results[19].episode;
        let s4epName09 = document.getElementById('s4episodeName9').innerText = json.results[19].name;
        let s4epDate09 = document.getElementById('s4episodeDate9').innerText = json.results[19].air_date;
    }
}

function episodeDataList3() {
    fetch(baseURL + 'episode/?page=3')
        .then((response) => response.json())
        .then((json) => displayEpisodeData(json))
        .catch((error) => console.log(error))

    const displayEpisodeData = (json) => {
        let s4episode10 = document.getElementById('s4episodeNum10').innerText = json.results[0].episode;
        let s4epName10 = document.getElementById('s4episodeName10').innerText = json.results[0].name;
        let s4epDate10 = document.getElementById('s4episodeDate10').innerText = json.results[0].air_date;
        
    /* SEASON 5 */
    //     let s5episode01 = document.getElementById('s5episodeNum1').innerText = json.results[1].episode;
    //     let s5epName01 = document.getElementById('s5episodeName1').innerText = json.results[1].name;
    //     let s5epDate01 = document.getElementById('s5episodeDate1').innerText = json.results[1].air_date;

    //     let s5episode02 = document.getElementById('s5episodeNum2').innerText = json.results[2].episode;
    //     let s5epName02 = document.getElementById('s5episodeName2').innerText = json.results[2].name;
    //     let s5epDate02 = document.getElementById('s5episodeDate2').innerText = json.results[2].air_date;

    //     let s5episode03 = document.getElementById('s5episodeNum3').innerText = json.results[3].episode;
    //     let s5epName03 = document.getElementById('s5episodeName3').innerText = json.results[3].name;
    //     let s5epDate03 = document.getElementById('s5episodeDate3').innerText = json.results[3].air_date;

    //     let s5episode04 = document.getElementById('s5episodeNum4').innerText = json.results[4].episode;
    //     let s5epName04 = document.getElementById('s5episodeName4').innerText = json.results[4].name;
    //     let s5epDate04 = document.getElementById('s5episodeDate4').innerText = json.results[4].air_date;

    //     let s5episode05 = document.getElementById('s5episodeNum5').innerText = json.results[5].episode;
    //     let s5epName05 = document.getElementById('s5episodeName5').innerText = json.results[5].name;
    //     let s5epDate05 = document.getElementById('s5episodeDate5').innerText = json.results[5].air_date;

    //     let s5episode06 = document.getElementById('s5episodeNum6').innerText = json.results[6].episode;
    //     let s5epName06 = document.getElementById('s5episodeName6').innerText = json.results[6].name;
    //     let s5epDate06 = document.getElementById('s5episodeDate6').innerText = json.results[6].air_date;

    //     let s5episode07 = document.getElementById('s5episodeNum7').innerText = json.results[7].episode;
    //     let s5epName07 = document.getElementById('s5episodeName7').innerText = json.results[7].name;
    //     let s5epDate07 = document.getElementById('s5episodeDate7').innerText = json.results[7].air_date;

    //     let s5episode08 = document.getElementById('s5episodeNum8').innerText = json.results[8].episode;
    //     let s5epName08 = document.getElementById('s5episodeName8').innerText = json.results[8].name;
    //     let s5epDate08 = document.getElementById('s5episodeDate8').innerText = json.results[8].air_date;

    //     let s5episode09 = document.getElementById('s5episodeNum9').innerText = json.results[9].episode;
    //     let s5epName09 = document.getElementById('s5episodeName9').innerText = json.results[9].name;
    //     let s5epDate09 = document.getElementById('s5episodeDate9').innerText = json.results[9].air_date;

    //     let s5episode10 = document.getElementById('s5episodeNum10').innerText = json.results[10].episode;
    //     let s5epName10 = document.getElementById('s5episodeName10').innerText = json.results[10].name;
    //     let s5epDate10 = document.getElementById('s5episodeDate10').innerText = json.results[10].air_date;
    
    //     let s6episode01 = document.getElementById('s6episodeNum1').innerText = json.results[11].episode;
    //     let s6epName01 = document.getElementById('s6episodeName1').innerText = json.results[11].name;
    //     let s6epDate01 = document.getElementById('s6episodeDate1').innerText = json.results[11].air_date;

    //     let s6episode02 = document.getElementById('s6episodeNum2').innerText = json.results[12].episode;
    //     let s6epName02 = document.getElementById('s6episodeName2').innerText = json.results[12].name;
    //     let s6epDate02 = document.getElementById('s6episodeDate2').innerText = json.results[12].air_date;

    //     let s6episode03 = document.getElementById('s6episodeNum3').innerText = json.results[13].episode;
    //     let s6epName03 = document.getElementById('s6episodeName3').innerText = json.results[13].name;
    //     let s6epDate03 = document.getElementById('s6episodeDate3').innerText = json.results[13].air_date;

    //     let s6episode04 = document.getElementById('s6episodeNum4').innerText = json.results[14].episode;
    //     let s6epName04 = document.getElementById('s6episodeName4').innerText = json.results[14].name;
    //     let s6epDate04 = document.getElementById('s6episodeDate4').innerText = json.results[14].air_date;

    //     let s6episode05 = document.getElementById('s6episodeNum5').innerText = json.results[15].episode;
    //     let s6epName05 = document.getElementById('s6episodeName5').innerText = json.results[15].name;
    //     let s6epDate05 = document.getElementById('s6episodeDate5').innerText = json.results[15].air_date;

    //     let s6episode06 = document.getElementById('s6episodeNum6').innerText = json.results[16].episode;
    //     let s6epName06 = document.getElementById('s6episodeName6').innerText = json.results[16].name;
    //     let s6epDate06 = document.getElementById('s6episodeDate6').innerText = json.results[16].air_date;

    //     let s6episode07 = document.getElementById('s6episodeNum7').innerText = json.results[17].episode;
    //     let s6epName07 = document.getElementById('s6episodeName7').innerText = json.results[17].name;
    //     let s6epDate07 = document.getElementById('s6episodeDate7').innerText = json.results[17].air_date;

    //     let s6episode08 = document.getElementById('s6episodeNum8').innerText = json.results[18].episode;
    //     let s6epName08 = document.getElementById('s6episodeName8').innerText = json.results[18].name;
    //     let s6epDate08 = document.getElementById('s6episodeDate8').innerText = json.results[18].air_date;

    //     let s6episode09 = document.getElementById('s6episodeNum9').innerText = json.results[19].episode;
    //     let s6epName09 = document.getElementById('s6episodeName9').innerText = json.results[19].name;
    //     let s6epDate09 = document.getElementById('s6episodeDate9').innerText = json.results[19].air_date;
    }
}

// function locationDataList1() {
//     fetch(baseURL + 'location/')
//         .then((response) => response.json())
//         .then((json) => displayLocationData(json))
//         .catch((error) => console.log(error))

//     const displayLocationData = (json) => {
//         let locationName01 = document.getElementById('locationName1').innerText = json.results[0].name;
//         let locationType01 = document.getElementById('locationType1').innerText = json.results[0].type;
//         let locationDim01 = document.getElementById('locationDim1').innerText = json.results[0].dimension;
//         // for (i = 0; i <= residents.length; i++) {
//         //     let locationRes01 = json.results[i].residents;
//         //     if (locationRes01 === 'https://rickandmortyapi.com/api/character/38') {
//         //         console.log('Beth Smith');
//         //         //need to populate character image
//         //     }
//         // }

//     }
// }

    
//call functions
characterData1();
characterData2();
episodeData(); //function displays first appearance for main characters
episodeDataList1(); //page 1 results
episodeDataList2(); //page 2 results
episodeDataList3(); //page 3 results
// locationDataList1();
