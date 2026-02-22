import 'package:dio/dio.dart';

class ApiClient {
  final Dio dio = Dio(BaseOptions(baseUrl: const String.fromEnvironment('API_BASE_URL', defaultValue: 'http://localhost:8080/api')));

  Future<List<dynamic>> getNews({String? category, String? q}) async {
    final res = await dio.get('/news', queryParameters: {'category': category, 'q': q});
    return res.data['data'] as List<dynamic>;
  }
}
