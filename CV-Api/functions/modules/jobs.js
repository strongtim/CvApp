exports.handler = (request, response) => {
    //TODO: extract to DB or external file
    var jobs = 
        [
            {
                "company" : "Just Eat Plc.",
                "title" : "Senior Android Contractor",
                "description" : "Developing and supporting a business critical Android order processing application (“Orderpad”) including highly scalable backend services. The system is used internationally on all Just Eat restaurants, processing millions of orders per week. Tech: Android - Kotlin / Architecture Components / MVVM / Retrofit2 / Coroutines / LiveData / Koin DI / Espresso / Firebase / Braze Xamarin Native / C# / UITest / .NET Web API / Team City / Soti MDM Amazon Web Services - Dynamo DB / SQS / SNS / EC2 / Cloud formation etc.",
                "period": "(Apr 2017 - Present)",
                "location" : "London",
                "imageUrl" : "https://firebasestorage.googleapis.com/v0/b/cvapi-2b579.appspot.com/o/justeat.png?alt=media"
            },
            {
                "company" : "Fraedom, HRG Plc.",
                "title" : "Senior Mobile Consultant",
                "description" : "Developed a business travel mobile app for itinerary management and travel assistance. This was a greenfield project in a newly formed agile team. Tech: Xamarin Forms (iOS / Android), Xamarin Native / MVVMCross (iOS / Android), SQLite, Web API / MVC on Azure, Redis, Notifications, Git, Team City",
                "period": "(Jan 2016 – Mar 2017)",
                "location" : "London",
                "imageUrl" : "https://firebasestorage.googleapis.com/v0/b/cvapi-2b579.appspot.com/o/fraedom.png?alt=media"    
            },
            {
                "company" : "Just Eat Plc.",
                "title" : "Mobile Contractor (Senior)",
                "description" : "Worked on multiple agile projects to communicate order and delivery tracking information from the Just Eat platform to restaurants and partners. Developed scalable APIs using .NET Web API 2, Amazon Web Services (EC2, Dynamo DB, SNS and SQS) and mobile / tablet clients using Xamarin Android / iOS (MVVMCross Native / Xamarin Forms). Tools/Tech used: Visual Studio, Xamarin Studio, NUnit/Moq, Git, TeamCity, JIRA, Google Cloud Messaging, PubNub, HockeyApp, TopShelf etc.",
                "period": "(Sept 2013 - Dec 2015)",
                "location" : "London",
                "imageUrl" : "https://firebasestorage.googleapis.com/v0/b/cvapi-2b579.appspot.com/o/justeat.png?alt=media"            
            },
            {
                "company" : "Novarum DX",
                "title" : "Xamarin Contractor",
                "description" : "Developed mobile iOS and Android apps for reading (via camera) and tracking medical diagnostic tests. Extensive use of Xamarin iOS / Android, SQLite and integration with REST APIs written in Django. Exposure to ISO 13485 and the application of this process within an agile software development context.",
                "period": "(Sept 2012 - Sept 2013)",
                "location" : "Edinburgh",
                "imageUrl" : "https://firebasestorage.googleapis.com/v0/b/cvapi-2b579.appspot.com/o/novarum.png?alt=media"
            },
            {
                "company" : "Avian Communications",
                "title" : "Technical Lead",
                "description" : "Developed mobile iOS and Android apps for reading (via camera) and tracking medical diagnostic tests. Extensive use of Xamarin iOS / Android, SQLite and integration with REST APIs written in Django. Exposure to ISO 13485 and the application of this process within an agile software development context.",
                "period": "(Nov 2007 - Sept 2012)",
                "location" : "Dundee, Scotland",
                "imageUrl" : "https://firebasestorage.googleapis.com/v0/b/cvapi-2b579.appspot.com/o/avian.jpeg?alt=media"
            }
        ]   
    
        var simulateNetworkDelayMs = 3;
            setTimeout(function notifyTimeover() { response.json(jobs) }, simulateNetworkDelayMs);
};