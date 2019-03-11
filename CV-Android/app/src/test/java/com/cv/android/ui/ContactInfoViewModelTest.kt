package com.cv.android.ui

import com.cv.android.repository.ContactInfoRepository
import com.cv.models.ContactInfo
import com.jraska.livedata.test
import io.mockk.every
import io.mockk.mockk
import io.reactivex.Observable
import org.junit.Before
import org.junit.Test

class ContactInfoViewModelTest : BaseViewModelTest() {

    lateinit var viewModel : ContactInfoViewModel
    lateinit var contactInfoRepository : ContactInfoRepository

    @Before
    fun setUp() {

        contactInfoRepository = mockk(relaxed = true)

        every {contactInfoRepository.getContactInfo() }.returns(Observable.just(testContactInfo))
    }

    @Test
    fun addressIsInCorrectFormat() {

        val expectedAddressFormat = "Address Line 1, Line 2, Line 3"

        viewModel = ContactInfoViewModel(contactInfoRepository)

        viewModel.address.test()
            .awaitValue()
            .assertHasValue()
            .assertValue(expectedAddressFormat)
    }

    @Test
    fun checkFields() {

        viewModel = ContactInfoViewModel(contactInfoRepository)

        viewModel.name.test()
            .awaitValue()
            .assertHasValue()
            .assertValue(testContactInfo.name)

        viewModel.mobile.test()
            .awaitValue()
            .assertHasValue()
            .assertValue(testContactInfo.mobileContact)

        viewModel.webAddress.test()
            .awaitValue()
            .assertHasValue()
            .assertValue(testContactInfo.webAddress)

        viewModel.email.test()
            .awaitValue()
            .assertHasValue()
            .assertValue(testContactInfo.emailAddress)
    }

    val testContactInfo : ContactInfo =

        ContactInfo(
            "Test 11",
            listOf("Address Line 1", "Line 2", "Line 3"),
            "0712345678",
            "test@test.com",
            "http://www.someaddress.com")
}
