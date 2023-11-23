const getQueryStringFromState = (data) => {       
    const params = {
        term: isEmpty(data.term) ? "2191" : data.term,
        subject: isEmpty(data.subject) ? undefined : data.subject,
        catalogNbr: isEmpty(data.catalogNbr) ? undefined : data.catalogNbr,
        searchType: isEmpty(data.searchType) ? "all" : data.searchType,
        keywords: isEmpty(data.keywords) ? undefined : data.keywords,
        college: isEmpty(data.college) ? undefined : (Array.from(data.college)).join(","),
        campus: isEmpty(data.campus) ? undefined : (Array.from(data.campus)).join(","),//we use Array.from to make sure this is an array, from admin page it could be a set
        session: isEmpty(data.session) ? undefined : (Array.from(data.session)).join(","),
        campusOrOnlineSelection: this.getCampusOrOnlineSelection(),//isEmpty(data.campusOrOnlineSelection) ? "C" : data.campusOrOnlineSelection,
        gen_studies: isEmpty(data.gs) ? undefined : (Array.from(data.gs)).join(","),
        instructorName: isEmpty(data.instructor) ? undefined : data.instructor,
        level: isEmpty(data.level) ? undefined : (Array.from(data.level)).join(","),
        classNbr: isEmpty(data.classNbr) ? undefined : data.classNbr,
        promod: data.promod ? "T" : "F",
        honors: data.honors ? "T" : "F",
        // honorsEnrichmentContracts: data.honors ? false : undefined,
        units: isEmpty(data.units) ? undefined : (Array.from(data.units)).join(","),
        daysOfWeek: isEmpty(data.daysOfWeek) ? undefined : (Array.from(data.daysOfWeek)).join(","),
        startDate: isEmpty(data.startDate) ? undefined : this.convertDateForUrl(data.startDate),
        endDate: isEmpty(data.endDate) ? undefined : this.convertDateForUrl(data.endDate),
        startTime: isEmpty(data.startTime) ? undefined : data.startTime,
        endTime: isEmpty(data.endTime) ? undefined : data.endTime,
        advanced: data.advanced,
    }

    return queryString.stringify(params)
}