/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        var nossoApp = document.getElementById("novamente");
        var nossoApp = document.getElementById("nossoApp");
        var home = document.getElementById("home");
        if (novamente){
            novamente.addEventListener("click", function(){
                var url = 'http://feedbackhunter.com.br/formulario/?f=' + localStorage.getItem('resultado')+'&uuid='+device.uuid;;
                var ref = cordova.InAppBrowser.open(url, '_blank', "location=yes,closebuttoncaption=Fechar");
            });
        }
        if (home){
            home.addEventListener("click", function(){
                var ref = cordova.InAppBrowser.open('http://feedbackhunter.com.br/', '_blank', 'location=yes');
            });
        }
        if (nossoApp){
            nossoApp.addEventListener("click", function(){
                var ref = cordova.InAppBrowser.open('http://feedbackhunter.com.br/formulario/?f=1', '_blank', "location=yes,closebuttoncaption=Fechar");
            });
        }
        

    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        if (parentElement){
            var listeningElement = parentElement.querySelector('.listening');
            var receivedElement = parentElement.querySelector('.received');

            listeningElement.setAttribute('style', 'display:none;');
            receivedElement.setAttribute('style', 'display:block;');

            console.log('Received Event: ' + id);
        }
        
    }
};
