module.exports = (req, pagesCount) => {
    const objectPagination = {
        currentPage: 1,
        limitPages: 4,
    }
    objectPagination.countPagination = Math.ceil(pagesCount / objectPagination.limitPages)
    if(req.query.page){
        objectPagination.currentPage = parseInt(req.query.page);
    }
    objectPagination.skipPages = (objectPagination.currentPage - 1) * objectPagination.limitPages;
    return objectPagination
}