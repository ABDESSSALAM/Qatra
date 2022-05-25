<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddVilleToVolontairesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('volontaires', function (Blueprint $table) {
            $table->unsignedBigInteger('Ville');
            $table->foreign('Ville')->references('id')->on('villes')
            ->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('volontaires', function (Blueprint $table) {
            //
        });
    }
}
