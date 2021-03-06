package com.cv.android.repository.remote

import com.cv.android.network.ClientProvider
import com.cv.models.ContactInfo
import com.cv.models.SendMessageRequest
import com.cv.models.Job
import com.cv.models.Photo
import io.reactivex.Observable
import io.reactivex.Single
import retrofit2.Response

class CvApiService(clientProvider: ClientProvider) {
    private val api = clientProvider.client.create(CvApiEndpoints::class.java)

    fun getContactInfo() : Observable<ContactInfo> = api.getContactInfo()

    fun getJobs() : Observable<List<Job>> = api.getJobs()

    fun postSendMessage(request: SendMessageRequest) : Observable<Response<Unit>> = api.postSendMessage(request)

    fun getPhotos() : Observable<List<Photo>> = api.getPhotos()
}