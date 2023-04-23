const mixpagedata={
    data() {
        return {
          pagedata: {
            pagesize: 3,
            currentpage: 1,
          },
        };
      },
      methods: {
        handleSizeChange(val) {
            this.pagedata.pagesize = val;
          },
          handleCurrentChange(val) {
            this.pagedata.currentpage = val;
          },
      },
};
export default mixpagedata