<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVolontairesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('volontaires', function (Blueprint $table) {
            $table->unsignedBigInteger('IdVolontaire')->primary();
            $table->string('CIN')->unique();
            $table->string('SanguinV')->nullable();
            // add ville
            $table->foreign('IdVolontaire')->references('id')->on('users');
           
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('volontaires');
    }
}
