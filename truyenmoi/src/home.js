function execute() {
    return Response.success([
        {title: "Truyện mới cập nhật", input: "https://truyenmoiz.com/danh-sach/truyen-moi", script: "gen.js"},
		{title: "Truyện HOT", input: "https://truyenmoiz.com/danh-sach/truyen-hot", script: "gen.js"},
		{title: "Truyện FULL", input: "https://truyenmoiz.com/danh-sach/truyen-full", script: "gen.js"},
		{title: "Truyện mới", input: "https://truyenmoiz.com/the-loai/truyen-audio", script: "gen.js"}
    ]);
}
