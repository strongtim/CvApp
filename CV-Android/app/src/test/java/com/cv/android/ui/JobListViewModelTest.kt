package com.cv.android.ui

import com.cv.android.repository.JobsRepository
import com.cv.models.Job
import io.mockk.every
import io.mockk.mockk
import io.reactivex.Observable
import junit.framework.Assert.assertEquals
import org.junit.Before
import org.junit.Test

class JobListViewModelTest : BaseViewModelTest() {

    lateinit var viewModel : JobListViewModel
    lateinit var jobsRepository : JobsRepository

    @Before
    fun setUp() {

        jobsRepository = mockk(relaxed = true)

        every {jobsRepository.getJobs() }.returns(Observable.just(sampleData))
    }

    @Test
    fun retunsCorrectNumberOfRows() {

        viewModel = createViewModel()

        assertEquals(viewModel.jobListAdapter.itemCount, sampleData.count())
    }



    fun createViewModel() : JobListViewModel = JobListViewModel(jobsRepository)

    val sampleData =

        listOf(
            Job("Company1", "Title1","Description1","period1","location1"),
            Job("Company2", "Title2","Description2","period2","location2"))
}
